import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';
export const NotFoundPage = () => (
  <Result
    status="404"
    title="Looks like you got lost :("
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><NavLink to="/" >
      Back Home
    </NavLink></Button>}
  />
);
