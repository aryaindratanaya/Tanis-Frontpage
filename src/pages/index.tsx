import type { NextPage } from 'next'
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
import { harborTypes as harbors, tripTypes } from 'constants/booking'
import { countries } from 'constants/country'
import { genders } from 'constants/ticket'

const Home: NextPage = () => {
  return (
    <Card title="Lets Book a Voyage!" style={{ maxWidth: 500, margin: 'auto' }}>
      <Form layout="vertical">
        <Form.Item
          label="From"
          name="from"
          initialValue={Object.entries(harbors)[0][1]}
          rules={[
            {
              required: true,
              message: 'This field cannot be empty!',
            },
          ]}
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
          rules={[
            {
              required: true,
              message: 'This field cannot be empty!',
            },
          ]}
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
          label="Trip Type"
          name="roundtrip"
          initialValue={Object.entries(tripTypes)[0][1]}
          rules={[
            {
              required: true,
              message: 'This field cannot be empty!',
            },
          ]}
        >
          <Radio.Group buttonStyle="solid" style={{ width: '100%' }}>
            {Object.entries(tripTypes).map(([tripKey, tripName]) => (
              <Radio.Button
                key={tripKey}
                value={tripName}
                style={{ width: '50%', textAlign: 'center' }}
              >
                {tripName}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.List name="passengers">
          {(fields, { add, remove }) => (
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
                    rules={[
                      {
                        required: true,
                        message: 'This field cannot be empty!',
                      },
                    ]}
                  >
                    <Input placeholder="Please input passenger's name" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name={[field.name, 'age']}
                    rules={[
                      {
                        required: true,
                        message: 'This field cannot be empty!',
                      },
                    ]}
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
                    rules={[
                      {
                        required: true,
                        message: 'This field cannot be empty!',
                      },
                    ]}
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
                    rules={[
                      {
                        required: true,
                        message: 'This field cannot be empty!',
                      },
                    ]}
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
                    rules={[
                      {
                        required: true,
                        message: 'This field cannot be empty!',
                      },
                    ]}
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
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Home
