import algoliasearch from 'algoliasearch/lite'
//import { hitComponent } from 'components/common/HitComponent'
import { InstantSearch, SearchBox, Hits, Configure, Pagination } from 'react-instantsearch-dom'

export default function Search(): JSX.Element {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
  )
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''

  return (
    <div>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <Configure hitsPerPage={5} />
        <SearchBox />
        {/* <Hits hitComponent={hitComponent} /> */}
        <Pagination /> {/* <== 追記 */}
      </InstantSearch>
    </div>
  )
}
