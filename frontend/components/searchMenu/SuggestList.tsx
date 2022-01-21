import LocationOn from '@components/icons/LocationOn'
const SuggestList = () => {
  // ほんとは繰り返し。今はレイアウト用に暫定
  return (
    <ul>
      <li className="flex">
        <LocationOn width="22px" height="22px" className="fill-gray-3" />
        <p className="ml-2.5 text-sm font-Mulish">Helsinki, Finland</p>
      </li>
      <li className="flex mt-9">
        <LocationOn width="22px" height="22px" className="fill-gray-3" />
        <p className="ml-2.5 text-sm font-Mulish">Turku, Finland</p>
      </li>
      <li className="flex mt-9">
        <LocationOn width="22px" height="22px" className="fill-gray-3" />
        <p className="ml-2.5 text-sm font-Mulish">Oulu, Finland</p>
      </li>
      <li className="flex mt-9">
        <LocationOn width="22px" height="22px" className="fill-gray-3" />
        <p className="ml-2.5 text-sm font-Mulish">Vaasa, Finland</p>
      </li>
    </ul>
  )
}
export default SuggestList
