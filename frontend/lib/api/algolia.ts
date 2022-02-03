import { GuestsValueObject } from '@domain/guets'
import { query } from '@lib/utils/common'
import algoliasearch from 'algoliasearch/lite'

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''
const ALGOLIA_SUGGEST_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST || ''

export const suggestClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || '',
)
export const suggestIndexName = ALGOLIA_SUGGEST_INDEX_NAME

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY).initIndex(
  ALGOLIA_INDEX_NAME,
)

export type searchResult = {
  city: string
  country: string
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: string
  beds: number
  photo: string
}
type Hits = {
  hits: searchResult[]
}
export const searchProperties = async ({
  city,
  country,
  adults,
  children,
}: query): Promise<searchResult[]> => {
  const guestsVO = new GuestsValueObject(adults, children)
  const filters: string[] = []
  if (city !== '') {
    filters.push(`(city:"${city}")`)
  }
  if (country !== '') {
    filters.push(`(country:"${country}")`)
  }
  if (guestsVO.guests > 0) {
    filters.push(`(maxGuests:${guestsVO.guests})`)
  }
  const { hits }: Hits = await searchClient.search('', {
    filters: filters.join(' AND '),
  })
  return hits
}
