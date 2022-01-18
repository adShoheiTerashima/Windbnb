import SearchIcon from '@components/icons/SearchIcon'
import { MouseEventHandler } from 'react'

type Props = {
  click: MouseEventHandler<HTMLButtonElement>
}
const SearchButton = ({ click }: Props) => {
  return (
    <button className="flex font-Mulish shadow-search rounded-2xl cursor-pointer" onClick={click}>
      <p className="p-4.5 border border-gray-2 rounded-l-2xl text-sm hover:border-black">
        dummy word
      </p>
      <p className="p-4.5 border border-l-0 border-gray-2 text-sm hover:border-l hover:-ml-px hover:border-black">
        4 guest
      </p>
      <div className="p-4.5 border border-l-0 border-gray-2 rounded-r-2xl hover:border-l hover:-ml-px hover:border-black">
        <SearchIcon width="18px" height="18px" className="fill-red" />
      </div>
    </button>
  )
}
export default SearchButton
