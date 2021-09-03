import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import 'antd/dist/antd.css';
import UserContext from '../components/UserContext';
import '../styles/main.css';



export default function MyApp({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(false)
  const router = useRouter()

useEffect(()=>{
   
  if(localStorage.getItem('auth')){
  setIsAuth(true)
}
if(!isAuth && !localStorage.getItem('auth') ){
  router.push('/signin')
}
},[])

  return (
    <UserContext.Provider value={{isAuth,setIsAuth}}>
     
      <Component {...pageProps} />

   </UserContext.Provider>
  );
}
