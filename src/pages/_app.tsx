import '../styles/global.css';

import {AppProps} from 'next/app';

import {AuthProvider} from '~/context/AuthContext';

const MyApp = ({Component, pageProps}: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
};

export default MyApp;
