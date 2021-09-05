import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useContext,} from 'react';

import UserContext from '../components/UserContext';

export const Header = () =>{
  
    const router = useRouter()
    const {isAuth, setIsAuth} = useContext(UserContext)
    const signOut = () =>{
  
    localStorage.removeItem('auth')
    setIsAuth(false)
    router.push('/')
    }
    
    const signIn = () =>{
      router.push('/signin')
    }
    
    return(
        <div className={'header'}>
       <Link href='/'><a className={'header-link'}>На главную</a></Link>
      {isAuth && <button className='home-button' onClick={signOut}>Выйти</button>}
     {isAuth ? <Link href='/account'><a className='header-account'>Личный кабинет</a></Link>: <button className='home-button' onClick={signIn}> Войти</button>}
       </div>
    )
}
