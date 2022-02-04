import { useContext, useEffect } from 'react'
import router from 'next/router'

import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { FORM_TYPE } from '@lib/utils/const'
import { focusFormType } from '@lib/utils/types'
import { SearchConditionContext } from '@lib/hooks/useSearchCondition'
import { LocationValueObject } from '@domain/location'
import SearchIcon from '@components/icons/SearchIcon'
import { GuestsValueObject } from '@domain/guets'

type Props = {
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const SearchButton = ({ setForcusForm }: Props) => {
  const navMenuCtx = useContext(NavMenuContext)
  const searchConditionCtx = useContext(SearchConditionContext)
  const locVO = new LocationValueObject(searchConditionCtx.city, searchConditionCtx.country)
  const guestsVO = new GuestsValueObject(searchConditionCtx.adults, searchConditionCtx.children)

  const click = (clickedType: focusFormType) => {
    navMenuCtx.setIsOpen(!navMenuCtx.isOpen)
    setForcusForm(clickedType)
  }

  const selectedLocation =
    locVO.location !== '' ? (
      <span className="text-sm">{locVO.location}</span>
    ) : (
      <span className="text-sm text-gray-BDBDBD">Add location</span>
    )

  const viewGuests =
    guestsVO.guests > 0 ? (
      <span className="text-sm">{guestsVO.guests} guests</span>
    ) : (
      <span className="text-sm text-gray-BDBDBD">Add guets</span>
    )

  return (
    <div className="flex cursor-pointer rounded-2xl font-Mulish shadow-search">
      <button
        type="button"
        className="flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap rounded-l-2xl border border-gray-F2F2F2 p-4 text-sm hover:border-black"
        onClick={() => click(FORM_TYPE.LOCATION)}
      >
        {selectedLocation}
      </button>
      <button
        type="button"
        className="flex-auto border border-l-0 border-gray-F2F2F2 p-4 font-Mulish hover:-ml-px hover:border-l hover:border-black"
        onClick={() => click(FORM_TYPE.GUESTS)}
      >
        {viewGuests}
      </button>
      <button
        type="button"
        className="flex-initial rounded-r-2xl border border-l-0 border-gray-F2F2F2 p-4.5 hover:-ml-px hover:border-l hover:border-black"
        onClick={() => click(FORM_TYPE.LOCATION)}
      >
        <SearchIcon width="18px" height="18px" className="fill-red-EB5757" />
      </button>
    </div>
  )
}
export default SearchButton
