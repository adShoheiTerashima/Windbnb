import SearchIcon from '@components/icons/SearchIcon'

type Props = {
  click: () => void
}

const SubmitButton = ({ click }: Props) => (
  <button
    className="bg-red-EB5757 flex rounded-2xl px-6 py-3.5 shadow-search transition-opacity hover:opacity-80"
    onClick={click}
  >
    <SearchIcon width="18px" height="18px" className="fill-white" />
    <p className="ml-2 font-Mulish text-sm font-bold text-white">Search</p>
  </button>
)

export default SubmitButton
