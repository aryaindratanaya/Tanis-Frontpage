import { Footer } from 'antd/lib/layout/layout'

export default function TheFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <strong>App Name © {new Date().getFullYear()}</strong> by PT. Bale
      Teknologi Bali
    </Footer>
  )
}
