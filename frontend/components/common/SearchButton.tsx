import { useContext, useEffect, useState } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'
import { SearchConditionContext } from '@lib/hooks/useSearchCondition'

import SearchIcon from '@components/icons/SearchIcon'

type Props = {
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const SearchButton = ({ setForcusForm }: Props) => {
  const navMenuCtx = useContext(NavMenuContext)
  const searchConditionCtx = useContext(SearchConditionContext)
  const [guests, setGuests] = useState(searchConditionCtx.adults + searchConditionCtx.children)

  const click = (clickedType: focusFormType) => {
    navMenuCtx.setIsOpen(!navMenuCtx.isOpen)
    setForcusForm(clickedType)
  }

  const selectedLocation =
    searchConditionCtx.country !== '' ? (
      <span className="text-sm">
        {searchConditionCtx.city}, {searchConditionCtx.country}
      </span>
    ) : (
      <span className="text-sm text-gray-BDBDBD">Add location</span>
    )
  useEffect(() => {
    setGuests(searchConditionCtx.adults + searchConditionCtx.children)
  }, [searchConditionCtx.adults, searchConditionCtx.children])
  const viewGuests =
    guests > 0 ? (
      <span className="text-sm">{guests} guests</span>
    ) : (
      <span className="text-sm text-gray-BDBDBD">Add guets</span>
    )

  return (
    <div className="flex cursor-pointer rounded-2xl font-Mulish shadow-search">
      <button
        type="button"
        className="rounded-l-2xl border border-gray-F2F2F2 p-4.5 text-sm hover:border-black"
        onClick={() => click(FORM_TYPE.LOCATION)}
      >
        {selectedLocation}
      </button>
      <button
        type="button"
        className="border border-l-0 border-gray-F2F2F2 p-4.5 font-Mulish hover:-ml-px hover:border-l hover:border-black"
        onClick={() => click(FORM_TYPE.GUESTS)}
      >
        {viewGuests}
      </button>
      <button
        type="button"
        className="rounded-r-2xl border border-l-0 border-gray-F2F2F2 p-4.5 hover:-ml-px hover:border-l hover:border-black"
        onClick={() => click(FORM_TYPE.LOCATION)}
      >
        <SearchIcon width="18px" height="18px" className="fill-red-EB5757" />
      </button>
    </div>
  )
}
export default SearchButton
