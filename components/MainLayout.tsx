import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer'

type MainLayoutProps = {
  children: any;
  title: string;
  description: string;
  keyWords?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'test',
  description = 'ant design',
  keyWords = 'test? project'
}) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <title>{title} | Test-Project</title>
    </Head>
    <div className="wrapper"><Header/>
      <main  className="main">{children}</main><Footer/></div></>
);
export type { MainLayoutProps };

export default MainLayout;
