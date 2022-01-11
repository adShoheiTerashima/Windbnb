import type { NextPage } from 'next'
import Page from '@components/Page'
import Layout from '@components/Layout'
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
