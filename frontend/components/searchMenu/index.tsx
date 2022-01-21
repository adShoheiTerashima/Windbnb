import { useContext, useEffect, useRef, useState } from 'react'

import { FocusSearchFormContext, formType } from '@lib/hooks/useSearch'

import SearchButton from '@components/searchMenu/Button'
import SearchInput from '@components/searchMenu/Input'
import SuggestList from '@components/searchMenu/SuggestList'
import GuestCount from '@components/searchMenu/GuestCount'

const SearchForm = () => {
  const locationRef = useRef<HTMLDivElement>(null)
  const guestsRef = useRef<HTMLDivElement>(null)
  const focusSearchFormCtx = useContext(FocusSearchFormContext)

  const isFocusLocation = focusSearchFormCtx.focusFormType === formType.LOCATION
  const isFocusGuests = focusSearchFormCtx.focusFormType === formType.GUESTS

  // ヘッダーの検索ボタンのどこを押したかによって、初期表示のfocusを変える
  useEffect(() => {
    if (isFocusLocation && locationRef.current) {
      locationRef.current.focus()
    }
    if (isFocusGuests && guestsRef.current) {
      guestsRef.current.focus()
    }
  })

  const clickLocation = () => {
    focusSearchFormCtx.setFocusType(formType.LOCATION)
  }
  const clickGuests = () => {
    focusSearchFormCtx.setFocusType(formType.GUESTS)
  }

  const [dummyFlg, setDummyFlg] = useState(false)

  const click = () => {
    console.log('click!!')
    setDummyFlg(!dummyFlg)
  }

  return (
    <div className="w-full h-115 absolute top-0 p-24 pb-0 bg-white">
      <div className="grid grid-cols-3 font-Mulish border border-gray-2 shadow-search rounded-2xl">
        <div className="flex">
          <div
            className="p-2.5 w-full h-full border border-white rounded-2xl  cursor-pointer hover:border-black focus:border-black"
            ref={locationRef}
            onClick={clickLocation}
            tabIndex={0}
          >
            <SearchInput id="search-location" label="LOCATION" placeholder="Add location" />
          </div>
          <div className="border-l border-gray-2" />
        </div>
        <div className="flex" onClick={click}>
          <div
            className="p-2.5 w-full h-full border border-white cursor-pointer hover:border hover:border-black hover:rounded-2xl focus:border focus:border-black focus:rounded-2xl"
            ref={guestsRef}
            onClick={clickGuests}
            tabIndex={0}
          >
            <p className="mb-1 text-0.5 font-extrabold">GUESTS</p>
            {dummyFlg ? (
              <p className="text-sm text-gray-4">Add guests</p>
            ) : (
              <p className="text-sm">4 guests</p>
            )}
          </div>
          <div className="border-l border-gray-2" />
        </div>
        <div className="flex justify-center items-center">
          <SearchButton />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-11">
        <div>{isFocusLocation ? <SuggestList /> : ''}</div>
        <div>{isFocusGuests ? <GuestCount /> : ''}</div>
      </div>
    </div>
  )
}

export default SearchForm
