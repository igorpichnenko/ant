import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import {
  useRouter
} from 'next/dist/client/router';
import {
  useContext,
  useEffect,
  useState
} from 'react';
import UserContext from './UserContext';

const FormSignIn = () => {
  const [isChecked,
    setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  const correctLogin = 'admin@test.ru';
  const correctPassword = '12345678qwe';
  const {
    setIsAuth
  } = useContext(UserContext)
  const router = useRouter()
  const reg = /(?=.*[a-zA-Z])/g
  const expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;

  const onFinish = ({
    username, password
  }) => {
    const correct = username === correctLogin && password === correctPassword
    if (!expression.test(username.toLowerCase())) {
      alert("введите корректный email")
      return
    }

    if (password.length < 6) {
      alert("пароль должен быть больше 6 символов")
      return
    }
    if (!reg.test(password.trim())) {

      alert("пароль должен содержать хотя бы одну букву")
      return
    }
    if (!correct) {
      alert("такого пользователя не существует")
      return
    }
    if (isChecked) {
      localStorage.setItem('auth', 'true')
    }
    setIsAuth(true)
    router.push('/account')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={ { span: 8 }}
      wrapperCol={ { span: 16 }}
      initialValues={ { remember: true }}
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
        wrapperCol={ { offset: 8, span: 16 }}
        >
        <Checkbox checked={isChecked} onChange={handleChange}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={ { offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSignIn;