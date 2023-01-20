import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import {AppProps} from 'next/app';
import {ToastContainer} from 'react-toastify';
import {AuthProvider} from '~/context/AuthContext';
import { wrapper, store } from "../../redux/store";
import { Provider } from 'react-redux';
import "../styles/CartItems.css";
import '../styles/CartScreen.css'


const MyApp = ({Component, pageProps}: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <AuthProvider>
        <>
          {getLayout(<Component {...pageProps} />)}
          <ToastContainer />
        </>
      </AuthProvider>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
