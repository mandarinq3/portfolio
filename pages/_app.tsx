import Footer from '../components/footer/Footer';
import '../styles/main.scss';
import {  store } from '../store/store';
import { Provider} from 'react-redux';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


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