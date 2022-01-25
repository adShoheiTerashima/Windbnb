import type { GetServerSideProps, NextPage } from 'next'

import {
  useSearchCondition,
  SearchConditionContext,
  defaultSearchConditionType,
} from '@lib/hooks/useSearchCondition'
import { isNumber, isString, _sleep } from '@lib/utils/common'

import Page from '@components/common/Page'
import Layout from '@components/common/Layout'
import PropertyList from '@components/propertyList'

type Props = {
  data: defaultSearchConditionType
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  await _sleep(200) // dummy
  return {
    props: {
      data: {
        city: isString(context.query.city) ? context.query.city : '',
        country: isString(context.query.country) ? context.query.country : '',
        adults: isNumber(context.query.adults) ? +context.query.adults : 0,
        children: isNumber(context.query.children) ? +context.query.children : 0,
      },
    },
  }
}

const Home: NextPage<Props> = ({ data }: Props) => {
  const meta = {
    title: '一覧画面 - Windbnb',
    description: 'Windbnbの一覧画面です。',
    noindex: true,
  }

  // [TODO]実際のアプリケーションではSEOを考えてserverPropsで取得するはず
  // 今回もその予定
  console.log(data)
  const SearchConditionCtx = useSearchCondition(data)

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
