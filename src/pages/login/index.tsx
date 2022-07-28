import { FC } from 'react';
import { Form, Button, Input } from 'antd';

const Login: FC = () => {
  const [form] = Form.useForm();
  return (
    <div className="h-[calc(100%+1rem)] flex justify-center items-center">
      <div className="w-60vh h-40vh mt-50px flex">
        <div className="w-30vh h-40vh bg-blue-400"></div>
        <div className="w-30vh h-40vh bg-red-200">
          <Form form={form}>
            <Form.Item label="用户名" name="userName" className="w-200px">
              <Input placeholder="请输入用户名" className="w-180px" />
            </Form.Item>
            <Form.Item label="密码" name="password" className="w-200px">
              <Input placeholder="请输入密码" className="w-180px" />
            </Form.Item>
          </Form>
          <Button className="ml-20px">登录</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
