import SearchIcon from '@components/icons/SearchIcon'

const SearchButton = () => (
  <button className="flex px-6 py-3.5 bg-red-1 rounded-2xl shadow-search transition-opacity hover:opacity-80">
    <SearchIcon width="18px" height="18px" className="fill-white" />
    <p className="ml-2 font-Mulish text-white text-sm font-bold">Search</p>
  </button>
)

export default SearchButton
