import type { NextPage } from 'next'
import Page from '@components/Page'
import Layout from '@components/Layout'

const Home: NextPage = () => {
  const meta = {
    title: '一覧画面 - Windbnb',
    description: 'Windbnbの一覧画面です。',
    noindex: true,
  }
  return (
    <Page meta={meta}>
      <Layout>test</Layout>
    </Page>
  )
}

export default Home
