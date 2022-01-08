import SearchIcon from '@components/icons/SearchIcon'

const SearchButton = () => {
  return (
    <div className="border rounded-search flex font-Mulish cursor-pointer">
      <p className="p-5 border-r border-gray-2">dummy word</p>
      <p className="p-5 border-r border-gray-2">4 guest</p>
      <div className="p-5 ">
        <SearchIcon width="18px" height="18px" className="fill-red" />
      </div>
    </div>
  )
}
export default SearchButton
