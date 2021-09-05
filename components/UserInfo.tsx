import { Typography } from 'antd';
import { UserTable } from './UserTable';
const { Title } = Typography;

export const UserInfo = () => {
  return (
    <>
      <div className="user-image">
        <img className="user-ava" src="./ava.jpg" />
      </div>

      <div>
        <h4>
          Имя: <strong>Иван</strong>{' '}
        </h4>
        <h4>
          Фамилия: <strong>Иванов</strong>
        </h4>
        <h4>
          Email: <strong>admin@test.ru</strong>
        </h4>
        <h4>
          Дата рождения: <strong>03.05.1995</strong>
        </h4>
      </div>
      <UserTable />
    </>
  );
};
