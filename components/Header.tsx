
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useContext,} from 'react';

import UserContext from '../components/UserContext';


export const Header = () =>{
  
    const router = useRouter()
    const {isAuth, setIsAuth} = useContext(UserContext)
    const signOut = () =>{
  
    localStorage.removeItem('auth')
    router.push('/signin')
    setIsAuth(false)
  
    }
  

     
  
    
    return(
        <div className={'header'}>
       <Link href='/'><a className={'header_link'}>На главную</a></Link>
       <button className='home_button' onClick={signOut}>Выйти</button>
       <button className='home_button' onClick={signOut}>Войти</button>
       </div>
    )
}
