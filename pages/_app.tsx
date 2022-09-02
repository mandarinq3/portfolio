import Footer from '../components/footer/Footer';
import '../styles/main.scss';
import {  store } from '../store/store';
import { Provider} from 'react-redux';


export default function App({Component,pageProps}:any){

    return (
        <>
        <Provider store={store}>
            <Component {...pageProps}/>
            <Footer/>
        </Provider>   
        </>
    )
}