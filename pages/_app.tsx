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
      "/realestate",
      "/mobileApp",
      "/automobile",
      "/admin/landing/Banner",
      "/admin/landing/ExpertTeam",
      "/admin/landing/ProductOverview",
      "/admin/landing/Service",
      "/admin/common/OurBrands",
      "/admin/common/CaseStudy",
      "/admin/common/Testimonials",
      "/admin/common/Team",
      "/admin/common/Header",
      "/admin/common/OurTech",
      "/admin/common/Footer",
      "/admin/common/OurSuccessStory",
      "/admin/aboutUs/Banner",
      "/admin/aboutUs/WhatWe",
      "/admin/aboutUs/ImageList",
      "/admin/aboutUs/OurValue",
      "/admin/aboutUs/LetWorkTogether",
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
