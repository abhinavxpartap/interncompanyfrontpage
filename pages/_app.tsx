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
      "/admin/landing/Banner",
      "/admin/landing/ProductOverview",
      "/admin/landing/ExpertTeam",
      "/admin/landing/Service",
      "/admin/aboutUs/Banner",
      "/admin/aboutUs/WhatWe",
      "/admin/aboutUs/ImageList",
      "/admin/aboutUs/OurValue",
      "/admin/aboutUs/LetWorkTogether",
      "/admin/Service/Banner",
      "/admin/Service/About",
      "/admin/Service/Process",
      "/admin/Service/Development",
      "/admin/Service/Faq",
      "/admin/Service/Assurance",
      "/admin/Industries/About",
      "/admin/Industries/Banner",
      "/admin/Industries/Development",
      "/admin/Industries/Faq",
      "/admin/common/CaseStudy",
      "/admin/common/OurBrands",
      "/admin/common/ProductOverview",
      "/admin/common/Testimonials",
      "/admin/common/Team",
      "/admin/common/Footer",
      "/admin/common/OurTech",
      "/admin/common/Header",
      "/admin/common/OurSuccessStory",
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
