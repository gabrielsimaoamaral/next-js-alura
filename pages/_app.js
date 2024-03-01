import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;