import Head from 'next/head'
import { SITE_NAME } from '@lib/utils/const'

type Meta = {
  title: string | null
  description: string | null
  noindex: boolean
}
type Props = {
  meta: Meta
  children: React.ReactNode
}
export default function Page({ meta, children }: Props) {
  const title = meta.title || SITE_NAME
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
