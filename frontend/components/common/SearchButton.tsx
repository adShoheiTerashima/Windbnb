import { useContext } from 'react'

import { NavMenuContext } from '@lib/hooks/useNavMenu'
import { FocusSearchFormContext, focusFormType, formType } from '@lib/hooks/useSearch'
import SearchIcon from '@components/icons/SearchIcon'

const SearchButton = () => {
  const navMenuCtx = useContext(NavMenuContext)
  const focusSearchFormCtx = useContext(FocusSearchFormContext)
  const click = (clickedType: focusFormType) => {
    navMenuCtx.setIsOpen(!navMenuCtx.isOpen)
    focusSearchFormCtx.setFocusType(clickedType)
  }
  return (
    <div className="flex font-Mulish shadow-search rounded-2xl cursor-pointer">
      <button
        type="button"
        className="p-4.5 border border-gray-2 rounded-l-2xl text-sm hover:border-black"
        onClick={() => click(formType.LOCATION)}
      >
        dummy word
      </button>
      <button
        type="button"
        className="p-4.5 border border-l-0 border-gray-2 text-sm hover:border-l hover:-ml-px hover:border-black"
        onClick={() => click(formType.GUESTS)}
      >
        4 guest
      </button>
      <button
        type="button"
        className="p-4.5 border border-l-0 border-gray-2 rounded-r-2xl hover:border-l hover:-ml-px hover:border-black"
        onClick={() => click(formType.LOCATION)}
      >
        <SearchIcon width="18px" height="18px" className="fill-red" />
      </button>
    </div>
  )
}
export default SearchButton
