import '../styles/global.css';

import {AppProps} from 'next/app';

const MyApp = ({Component, pageProps}: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default MyApp;
