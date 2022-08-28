import '../styles/main.scss';


export default function App({Component,pageProps}:any){
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}