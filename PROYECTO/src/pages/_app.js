import '../styles/estatico.css'
import '../styles/main.css'

import { AppProps } from "next/app";

export default function MyApp({Component,pageProps}){
    return <Component {...pageProps} />
}