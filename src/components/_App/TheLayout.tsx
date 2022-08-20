import { ReactNode } from 'react'
import Layout from 'antd/lib/layout/layout'
import TheHeader from './TheHeader'
import TheContent from './TheContent'
import TheFooter from './TheFooter'

export default function TheLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <TheHeader />
      <TheContent>{children}</TheContent>
      <TheFooter />
    </Layout>
  )
}
