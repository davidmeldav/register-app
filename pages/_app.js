import '../styles/globals.css';
import {LoginProvider} from '../hooks/useLogin';

function MyApp({ Component, pageProps }) {
  return (
   
    <LoginProvider>
  <   Component {...pageProps} />
  </LoginProvider>
  
  )
}

export default MyApp
