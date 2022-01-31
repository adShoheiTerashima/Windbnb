import LocationOn from '@components/icons/LocationOn'

import { Hit } from 'react-instantsearch-core'

type HitDoc = {
  objectID: string
  city: string
  country: string
}

type Props = {
  hit: Hit<HitDoc>
}

const SuggestItem = ({ hit }: Props) => {
  return (
    <li>
      <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
      <p className="ml-2.5 font-Mulish text-sm">
        {hit.city}, {hit.country}
      </p>
    </li>
  )
}
export default SuggestItem
