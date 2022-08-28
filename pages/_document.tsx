import Document, {Html,Head,Main,NextScript} from "next/document";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                
                </Head>
                <body>
                    <Main></Main>
                    <NextScript>
                    
                    </NextScript>
                </body>
            </Html>
        )
    }
}