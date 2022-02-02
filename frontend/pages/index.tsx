import type { GetServerSideProps, NextPage } from 'next'
import algoliasearch from 'algoliasearch/lite'

import {
  useSearchCondition,
  SearchConditionContext,
  defaultSearchConditionType,
} from '@lib/hooks/useSearchCondition'
import { isNumber, isString, _sleep } from '@lib/utils/common'

import Page from '@components/common/Page'
import Layout from '@components/common/Layout'
import PropertyList from '@components/propertyList'

type searchResult = {
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

type Props = {
  data: defaultSearchConditionType
  list: searchResult[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // とりあえずalgoliaどう動かすのかテスト
  // いったん適当に書き殴ってみる
  const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''
  const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
  const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''
  const index = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY).initIndex(ALGOLIA_INDEX_NAME)
  const filters: string[] = []
  if (isString(context.query.city) && context.query.city !== '') {
    filters.push(`(city:"${context.query.city}")`)
  }
  if (isString(context.query.country) && context.query.country !== '') {
    filters.push(`(country:"${context.query.country}")`)
  }
  if (isNumber(context.query.adults) && isNumber(context.query.children)) {
    filters.push(`(maxGuests:${context.query.adults + context.query.children})`)
  }
  const t = filters.join(' AND ')
  const { hits }: { hits: searchResult[] } = await index.search('', { filters: t })

  return {
    props: {
      data: {
        city: isString(context.query.city) ? context.query.city : '',
        country: isString(context.query.country) ? context.query.country : '',
        adults: isNumber(context.query.adults) ? +context.query.adults : 0,
        children: isNumber(context.query.children) ? +context.query.children : 0,
      },
      list: hits,
    },
  }
}

const Home: NextPage<Props> = ({ data, list }: Props) => {
  const meta = {
    title: '一覧画面 - Windbnb',
    description: 'Windbnbの一覧画面です。',
    noindex: true,
  }

  const SearchConditionCtx = useSearchCondition(data)

  return (
    <Page meta={meta}>
      <SearchConditionContext.Provider value={SearchConditionCtx}>
        <Layout>
          <PropertyList list={list} />
        </Layout>
      </SearchConditionContext.Provider>
    </Page>
  )
}

export default Home
