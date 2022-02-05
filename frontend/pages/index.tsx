import type { GetServerSideProps, NextPage } from 'next'

import {
  useSearchCondition,
  SearchConditionContext,
  defaultSearchConditionType,
} from '@lib/hooks/useSearchCondition'
import { formattedQuery, rowQuery, _sleep } from '@lib/utils/common'

import Page from '@components/common/Page'
import Layout from '@components/common/Layout'
import PropertyList from '@components/propertyList'
import { searchProperties, SearchResult } from '@lib/api/algolia'

type Props = {
  data: defaultSearchConditionType
  list: SearchResult[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const data = formattedQuery(context.query as rowQuery)
  const list = await searchProperties(data)

  return {
    props: { data, list },
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
