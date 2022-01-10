import SearchIcon from '@components/icons/SearchIcon'

const SearchButton = () => {
  return (
    <div className="flex font-Mulish cursor-pointer shadow-search rounded-search">
      <p className="p-5 border border-gray-2 rounded-l-search hover:border-black">dummy word</p>
      <p className="p-5 border border-l-0 border-gray-2 hover:border-l hover:-ml-px hover:border-black">
        4 guest
      </p>
      <div className="p-5 border border-l-0 border-gray-2 rounded-r-search hover:border-l hover:-ml-px hover:border-black">
        <SearchIcon width="18px" height="18px" className="fill-red" />
      </div>
    </div>
  )
}
export default SearchButton
