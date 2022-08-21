import { NextPage } from 'next'
import { Card, Button, Result } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { QRCodeSVG } from 'qrcode.react'

const Success: NextPage = () => {
  return (
    <Card style={{ maxWidth: 500, margin: 'auto' }}>
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
            <QRCodeSVG
              value={`{"from":"Sanur","to":"Lembongan","roundtrip":false,"passengers":[{"gender":"Male","nationality":"Indonesia","name":"Tono","age":21,"address":"Hotel Cendana"}]}`}
              size={200}
            />
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
    </Card>
  )
}

export default Success
