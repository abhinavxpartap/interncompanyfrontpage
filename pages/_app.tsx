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
      "/dataAnalytics",
      "/product",
      "/mobileApp",
      "/webdevelopment",
      "/automobile",
      "/services/Web_Application_Development",
      "/services/UX_UI_Consulting",
      "/services/Product_Design",
      "/services/IOS_Application_Development",
      "/services/Flutter_Application_Development",
      "/services/Data_Analytics",
      "/services/Cloud_Infrastructure_Setup",
      "/services/Mobile_App_Development",
      "/services/Chat_Bot_Development",
      "/services/Android_Application_Development",
      "/industries/Artificial_Intelligence",
      "/industries/Blockchain_Application_Development",
      "/industries/Cloud_Application_Development",
      "/industries/industry_4.0",
      "/industries/IoT_Development",
      "/industries/Machine_Learning",
      "/industries/Robot_Process_Automation",
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
