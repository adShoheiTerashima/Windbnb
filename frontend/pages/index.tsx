import type { NextPage } from 'next'
import Page from '@components/common/Page'
import Layout from '@components/common/Layout'
import PropertyList from '@components/propertyList'

const Home: NextPage = () => {
  const meta = {
    title: '一覧画面 - Windbnb',
    description: 'Windbnbの一覧画面です。',
    noindex: true,
  }
  return (
    <Page meta={meta}>
      <Layout>
        <PropertyList />
      </Layout>
    </Page>
  )
}

export default Home
