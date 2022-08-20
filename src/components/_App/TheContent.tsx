import { ReactNode } from 'react'
import { Content } from 'antd/lib/layout/layout'
import s from 'styles/_App/TheContent.module.css'

export default function TheContent({ children }: { children: ReactNode }) {
  return <Content className={s.content}>{children}</Content>
}
