import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {LoaderContext, LoaderProvider} from "../context/LoaderContext";
import {useContext} from "react";
import Loader from "../utils/Loader";
import {useRouter} from "next/router";
import {AuthProvider} from "../context/AuthContext";


function MyApp({ Component, pageProps }: AppProps) {

  const {isLoading, setIsLoading} = useContext(LoaderContext);

  const router = useRouter();
  const unprotectedRoutes = [
    "/",
    "/aboutus",
    "/blog",
    "/blogDetailVeiw",
    "/contact",
    "/industries",
    "/portfolio",
    "/portfolio2",
    "/service",
    "/login",
    "/admin",
    "/finance",
      "/product",
    "/realestate",
    "/mobileApp",
    "/automobile",
      "/dataAnalytics",
      "/webdevelopment"

  ];

  return <LoaderContext.Provider value={{isLoading, setIsLoading}}>
    <LoaderProvider>
      {
        !unprotectedRoutes.includes(router.pathname) ? <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider> : <Component {...pageProps} />
      }
      <Loader/>
    </LoaderProvider>
  </LoaderContext.Provider>
}


export default MyApp
