import Document, {Html,Head,Main,NextScript} from "next/document";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                <title>web cv</title>
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