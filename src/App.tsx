import React, { useState, useEffect } from "react";
import Child from "./components/child/Child";
import { Button, Form, Input, Table } from "antd";
import { useMouse } from "./hooks/usemouse";
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 22 },
};

const App = () => {
  //useState定义数据，必须通过解构赋值的方式来定义，而且是一个数组
  //数组的第一项代表数据，第二项代表改变数据的方法
  let [num, setNum] = useState<number>(100); //num初始值为0，类型是number，方法是setNum
  let update = () => {
    setNum(999);
  };
  let [arr] = useState<string[]>(["a", "b", "c", "d"]);
  let send = (msg: string) => {
    console.log(msg);
  };
  //鼠标定位
  let { x, y } = useMouse();
  //组件挂载
  useEffect(() => {
    //组件卸载
    return () => {};
  });
  //提交表单且数据验证成功后回调事件
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  //提交表单且数据验证失败后回调事件
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  //表单数据
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  //查看
  const check = (record: any) => {
    console.log(record);
  };
  //表头数据
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      render: (text: string) => {
        return <span style={{ color: "red" }}>{text}</span>;
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (record: any) => {
        return (
          <div>
            <Button>编辑</Button>
            <Button type="primary" onClick={() => check(record)}>
              查看
            </Button>
            <Button type="primary" danger>
              删除
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Button>按钮</Button>
      <div>
        {x}---{y}
      </div>
      <Child num={num} send={send}>
        <div>我是插槽的内容</div>
      </Child>
      <div>{num}</div>
      <div>
        <button onClick={update}>改变数据</button>
      </div>
      <div>
        {arr.map((item: string, index: number) => {
          return (
            <div key={index}>
              {item}---{index}
            </div>
          );
        })}
      </div>
      <div>{num > 10 ? <div>111</div> : <div>222</div>}</div>
      {/* 表单   */}
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ username: "admin", password: "123" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入您的账号!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入您的密码!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default App;
