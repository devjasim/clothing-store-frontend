import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import {AppProps} from 'next/app';
import {ToastContainer} from 'react-toastify';

import {AuthProvider} from '~/context/AuthContext';

const MyApp = ({Component, pageProps}: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AuthProvider>
      <>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      </>
    </AuthProvider>
  );
};

export default MyApp;
