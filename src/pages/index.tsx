import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Popconfirm,
} from 'antd'
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import {
  harborTypes as harbors,
  roundtrip as roundtrips,
} from 'constants/booking'
import { genders } from 'constants/ticket'
import { countries } from 'constants/country'
import { genericRequiredRule } from 'libs/formRules'

const Home: NextPage = () => {
  const router = useRouter()

  const onFinish = (bookingRequest: any) => {
    localStorage.setItem(
      'tanis-booking-request',
      JSON.stringify(bookingRequest)
    )
    router.push('success')
  }

  return (
    <Card
      title="Let's Book a Voyage!"
      style={{ maxWidth: 500, margin: 'auto' }}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="From"
          name="from"
          initialValue={Object.entries(harbors)[0][1]}
          required
        >
          <Select>
            {Object.entries(harbors).map(([harborKey, harborName]) => (
              <Select.Option key={harborKey} value={harborName}>
                {harborName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="To"
          name="to"
          initialValue={Object.entries(harbors)[1][1]}
          required
        >
          <Select>
            {Object.entries(harbors).map(([harborKey, harborName]) => (
              <Select.Option key={harborKey} value={harborName}>
                {harborName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={Object.keys(roundtrips).join(' or ') + '?'}
          name="roundtrip"
          initialValue={false}
          required
        >
          <Radio.Group buttonStyle="solid" style={{ width: '100%' }}>
            {Object.entries(roundtrips).map(
              ([roundtripKey, roundtripValue]) => (
                <Radio.Button
                  key={roundtripKey}
                  value={roundtripValue}
                  style={{ width: '50%', textAlign: 'center' }}
                >
                  {roundtripKey}
                </Radio.Button>
              )
            )}
          </Radio.Group>
        </Form.Item>
        <Form.List
          name="passengers"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(
                    new Error('At least 1 passenger required.')
                  )
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, i) => (
                <Card
                  key={field.key}
                  type="inner"
                  title={`#${i + 1} Passenger`}
                  extra={
                    <Popconfirm
                      title="Are you sure to delete this passenger?"
                      placement="bottomRight"
                      onConfirm={() => remove(field.name)}
                    >
                      <UserDeleteOutlined style={{ color: 'red' }} />
                    </Popconfirm>
                  }
                  style={{ marginBottom: 20 }}
                >
                  <Form.Item
                    label="Name"
                    name={[field.name, 'name']}
                    rules={[genericRequiredRule]}
                  >
                    <Input placeholder="Please input passenger's name" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name={[field.name, 'age']}
                    rules={[genericRequiredRule]}
                  >
                    <InputNumber
                      min={0}
                      placeholder="Please input passenger's age"
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    name={[field.name, 'gender']}
                    initialValue={Object.entries(genders)[0][1]}
                    rules={[genericRequiredRule]}
                  >
                    <Select>
                      {Object.entries(genders).map(
                        ([genderKey, genderName]) => (
                          <Select.Option key={genderKey} value={genderName}>
                            {genderName}
                          </Select.Option>
                        )
                      )}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Nationality"
                    name={[field.name, 'nationality']}
                    initialValue={countries[101].name}
                    rules={[genericRequiredRule]}
                  >
                    <Select showSearch>
                      {countries.map(({ name, code }) => (
                        <Select.Option key={code} value={name}>
                          {name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name={[field.name, 'address']}
                    rules={[genericRequiredRule]}
                  >
                    <Input placeholder="Please input passenger's address" />
                  </Form.Item>
                </Card>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<UserAddOutlined />}
                >
                  Add a passenger
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Create My Booking!
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Home
