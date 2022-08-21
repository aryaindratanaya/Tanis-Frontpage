import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Card, Button, Result } from 'antd'
import { DownloadOutlined, RollbackOutlined } from '@ant-design/icons'
import { QRCodeSVG } from 'qrcode.react'

const Success: NextPage = () => {
  const router = useRouter()
  const [bookingRequest, setBookingRequest] = useState<string | null>(null)

  useEffect(() => {
    setBookingRequest(localStorage.getItem('tanis-booking-request') || '')
  }, [])

  return bookingRequest === null ? null : (
    <Card style={{ maxWidth: 500, margin: 'auto' }}>
      {bookingRequest ? (
        <Result
          status="success"
          title={
            <>
              Successfully Created a <br />
              <strong>Booking Request</strong>!
            </>
          }
          subTitle={
            <div style={{ marginTop: 25 }}>
              <QRCodeSVG value={bookingRequest} size={200} />
              <p style={{ marginTop: 25 }}>
                Please proceed to the counter and show this QR Code to get your
                ticket(s).
              </p>
            </div>
          }
          extra={
            <Button
              key="download"
              type="primary"
              icon={<DownloadOutlined />}
              block
            >
              Download
            </Button>
          }
        />
      ) : (
        <Result
          status="error"
          title={<>Oops! Sorry, you are not allowed to enter this page.</>}
          subTitle={
            <p style={{ marginTop: 25 }}>
              Perhaps you got lost when creating your{' '}
              <strong>Booking Request</strong>?
            </p>
          }
          extra={
            <Button
              key="back"
              type="primary"
              icon={<RollbackOutlined />}
              onClick={() => router.push('/')}
              block
            >
              Back
            </Button>
          }
        />
      )}
    </Card>
  )
}

export default Success
