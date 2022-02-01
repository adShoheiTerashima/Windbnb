import { FC, ReactElement, VFC } from 'react'
import LocationOn from '@components/icons/LocationOn'

import { Hit, HitsProvided } from 'react-instantsearch-core'
import { connectHits } from 'react-instantsearch-dom'

type HitDoc = {
  objectID: string
  city: string
  country: string
}

type Props = HitsProvided<Hit<HitDoc>> & {
  click: (propertyId: string) => void
}

const SuggestItem: React.FunctionComponent<HitsProvided<Hit<HitDoc>>> = ({ hits }) => {
  return (
    <ul>
      {hits.map((hit: HitDoc) => (
        <li className="flex cursor-pointer hover:font-bold">
          <LocationOn width="22px" height="22px" className="fill-gray-4F4F4F" />
          <p className="ml-2.5 font-Mulish text-sm">
            {hit.city}, {hit.country}
          </p>
        </li>
      ))}
    </ul>
  )
}
export default connectHits(SuggestItem)
