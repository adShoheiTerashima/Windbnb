import type { NextPage } from 'next'

import { useSearchCondition, SearchConditionContext } from '@lib/hooks/useSearchCondition'

import Page from '@components/common/Page'
import Layout from '@components/common/Layout'
import PropertyList from '@components/propertyList'

const Home: NextPage = () => {
  const meta = {
    title: '一覧画面 - Windbnb',
    description: 'Windbnbの一覧画面です。',
    noindex: true,
  }

  // 実際のアプリケーションではSEOを考えてserverPropsで取得するはず
  // 今回もその予定
  const SearchConditionCtx = useSearchCondition()
  return (
    <Page meta={meta}>
      <SearchConditionContext.Provider value={SearchConditionCtx}>
        <Layout>
          <PropertyList />
        </Layout>
      </SearchConditionContext.Provider>
    </Page>
  )
}

export default Home
