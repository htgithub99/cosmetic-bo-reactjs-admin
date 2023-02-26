import { message } from "antd";

export const onErrorMessage = (
  type = "error",
  content = "This is an error message"
) => {
  const [messageApi, contextHolder] = message.useMessage();
  (messageApi as any).open({
    type: 'success',
    content: 'dhsadhjsad',
  });
};
