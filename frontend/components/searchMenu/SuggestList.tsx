import LocationOn from '@components/icons/LocationOn'

type Props = {
  click: (propertyId: number) => void
}

const SuggestList = ({ click }: Props) => {
  // ほんとは繰り返し。今はレイアウト用に暫定
  return (
    <ul>
      <li className="flex cursor-pointer hover:font-bold" onClick={() => click(1)}>
        <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
        <p className="ml-2.5 font-Mulish text-sm">Helsinki, Finland</p>
      </li>
      <li className="mt-9 flex cursor-pointer hover:font-bold">
        <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
        <p className="ml-2.5 font-Mulish text-sm">Turku, Finland</p>
      </li>
      <li className="mt-9 flex cursor-pointer hover:font-bold">
        <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
        <p className="ml-2.5 font-Mulish text-sm">Oulu, Finland</p>
      </li>
      <li className="mt-9 flex cursor-pointer hover:font-bold">
        <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
        <p className="ml-2.5 font-Mulish text-sm">Vaasa, Finland</p>
      </li>
    </ul>
  )
}
export default SuggestList
