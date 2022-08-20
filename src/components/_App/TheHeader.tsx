import { Header } from 'antd/lib/layout/layout'
import s from 'styles/_App/TheHeader.module.css'

export default function TheHeader() {
  return (
    <Header className={s.header}>
      <h1>App Name</h1>
    </Header>
  )
}
