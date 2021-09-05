import MainLayout from "../components/MainLayout";
import { UserInfo } from "../components/UserInfo"
import { useContext,} from 'react';
import UserContext from '../components/UserContext';
import { useRouter } from 'next/dist/client/router';

const Account = () => {
  const router = useRouter()
  const {isAuth, setIsAuth} = useContext(UserContext)
  
  
  return <MainLayout title={'home'} description={'home'}> 
  {isAuth ? <UserInfo/>:<div className="content"> <h2>Пожалуйста авторизуйтесь</h2>  <button className='account-button' onClick={() => router.push('/signin')}> Войти</button></div>}
  </MainLayout>
};

export default Account;