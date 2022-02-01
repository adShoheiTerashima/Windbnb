import { VFC } from 'react'
import LocationOn from '@components/icons/LocationOn'

import { Hit, HitsProvided } from 'react-instantsearch-core'
import { connectHits } from 'react-instantsearch-dom'

type HitDoc = {
  objectID: string
  city: string
  country: string
}

type Props = HitsProvided<Hit<HitDoc>> & {
  click: (city: string, country: string) => void
}

const SuggestList: VFC<Props> = ({ hits, click }) => {
  return (
    <ul>
      {hits!.map((hit: HitDoc) => (
        <li
          className="flex cursor-pointer hover:font-bold"
          onClick={() => click(hit.city, hit.country)}
          key={hit.objectID}
        >
          <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
          <p className="ml-2.5 font-Mulish text-sm">
            {hit.city}, {hit.country}
          </p>
        </li>
      ))}
    </ul>
  )
}
export default connectHits<Props, Hit<HitDoc>>(SuggestList)
