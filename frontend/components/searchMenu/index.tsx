import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { InstantSearch, Hits, Configure } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import { SearchConditionContext } from '@lib/hooks/useSearchCondition'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'

import SubmitButton from '@components/searchMenu/SubmitButton'
import SearchInput from '@components/searchMenu/Input'
import SuggestItem from '@components/searchMenu/SuggestItem'
import GuestCount from '@components/searchMenu/GuestCount'

type Props = {
  focusForm: focusFormType
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const SearchForm = ({ focusForm, setForcusForm }: Props) => {
  const locationRef = useRef<HTMLDivElement>(null)
  const guestsRef = useRef<HTMLDivElement>(null)
  const searchConditionCtx = useContext(SearchConditionContext)
  const [guests, setGuests] = useState(0)
  const router = useRouter()

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
  )
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''

  // 検索テキストフォーム周り
  const [inputCity, setInputCity] = useState(searchConditionCtx.city)
  const [inputCountry, setInputCountry] = useState(searchConditionCtx.country)
  const [inputText, setInputText] = useState(
    searchConditionCtx.country !== ''
      ? `${searchConditionCtx.city}, ${searchConditionCtx.country}`
      : '',
  )
  const changeText = (event: { target: HTMLInputElement }) => setInputText(event.target.value)

  // guestの人数変更
  const [countAdults, setCountAdults] = useState(searchConditionCtx.adults)
  const [countChildren, setCountChildren] = useState(searchConditionCtx.children)
  const inputAdults = (num: number) => setCountAdults(num)
  const inputChildren = (num: number) => setCountChildren(num)
  useEffect(() => setGuests(countAdults + countChildren), [countAdults, countChildren])

  // これは値オブジェクトとして切り出したい…
  const isZeroGuest = guests === 0
  const isFocusLocation = focusForm === FORM_TYPE.LOCATION
  const isFocusGuests = focusForm === FORM_TYPE.GUESTS

  // ヘッダーの検索ボタンのどこを押したかによって、初期表示のfocusを変える
  useEffect(() => {
    if (isFocusLocation && locationRef.current) {
      locationRef.current.focus()
    }
    if (isFocusGuests && guestsRef.current) {
      guestsRef.current.focus()
    }
  }, [])

  // clickイベント
  const clickLocation = () => setForcusForm(FORM_TYPE.LOCATION)
  const clickGuests = () => setForcusForm(FORM_TYPE.GUESTS)
  const clickSuggest = (propertyId: number) => {
    // ここで何らかの形でpropertyIdからcity, countryを取り出す
    console.log(`propertyId${propertyId}`)

    // とりあえず適当に値入れておく
    setInputText('Helsinki, Finland')
    setInputCity('Helsinki')
    setInputCountry('Finland')
  }

  // Searchボタン押下
  const clickSubmitButton = () => {
    const query = {
      city: inputCity,
      country: inputCountry,
      adults: countAdults,
      children: countChildren,
    }
    // dummy url
    router.push({
      pathname: '/',
      query,
    })
  }

  return (
    <div className="absolute top-0 h-115 w-full bg-white p-24 pb-0">
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <Configure hitsPerPage={4} />
        <div className="grid grid-cols-3 rounded-2xl border border-gray-F2F2F2 font-Mulish shadow-search">
          <div className="flex">
            <div
              className="focus:outline-none h-full w-full cursor-pointer rounded-2xl border border-white p-2.5 focus-within:border-black hover:border-black"
              ref={locationRef}
              onClick={clickLocation}
              tabIndex={0}
            >
              <SearchInput
                id="search-location"
                label="LOCATION"
                placeholder="Add location"
                inputText={inputText}
                change={changeText}
              />
            </div>
            <div className="border-l border-gray-F2F2F2" />
          </div>
          <div className="flex">
            <div
              className="focus:outline-none h-full w-full  cursor-pointer rounded-2xl border border-white  p-2.5 hover:border-black focus:border-black"
              ref={guestsRef}
              onClick={clickGuests}
              tabIndex={0}
            >
              <p className="mb-1 text-0.5 font-extrabold">GUESTS</p>
              {isZeroGuest ? (
                <p className="text-sm text-gray-BDBDBD">Add guests</p>
              ) : (
                <p className="text-sm">{guests} guests</p>
              )}
            </div>
            <div className="border-l border-gray-F2F2F2" />
          </div>
          <div className="flex items-center justify-center">
            <SubmitButton click={clickSubmitButton} />
          </div>
        </div>
        <div className="mt-11 grid grid-cols-3">
          <div className="ml-1.5">
            {isFocusLocation ? (
              <ul>
                <Hits hitComponent={SuggestItem} />
              </ul>
            ) : (
              ''
            )}
          </div>
          <div className="ml-2.5">
            {isFocusGuests ? (
              <GuestCount
                countAdults={countAdults}
                countChildren={countChildren}
                inputAdults={inputAdults}
                inputChildren={inputChildren}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}

export default SearchForm
