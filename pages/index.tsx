import MainLayout from "../components/MainLayout";
import { UserInfo } from "../components/UserInfo"
import { useContext,} from 'react';
import UserContext from '../components/UserContext';

const Index = () => {
  
  const {isAuth, setIsAuth} = useContext(UserContext)
  
  

  return <MainLayout title={'home'} description={'home'}> 
   <h1 color="title">Добро пожаловать</h1>
  </MainLayout>
};

export default Index;
