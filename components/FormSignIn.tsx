import { Form, Input, Button, Checkbox } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import UserContext from './UserContext';

const FormSignIn = () => {
  
  const correctLogin = 'admin@test.ru';
  const correctPassword = '12345678qwe';
  const { setIsAuth } = useContext(UserContext)
  const router = useRouter()

  const onFinish = ({ username, password }) => {
    if (username === correctLogin && password === correctPassword) {
      console.log('Success:', username, password);
    } 
    localStorage.setItem('auth','true')
    setIsAuth(true)
    router.push('/')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSignIn;
