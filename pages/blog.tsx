import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import seoData from '../data/seoData.json';
import {BlogCards} from '../components/BlogCard';
import {Img} from '../utils/Img';
import {Pagination} from '@mui/material';
import {GetStories} from '../components/getStories';
import {useRouter} from 'next/router';
import {Header} from '../components/Common/Header';
import {Footer} from '../components/footer';
import FixedButton from "../components/FixedButton";
import Float from "../components/Float";

const BlogPage: React.FC = () => {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index: number) => {
    setIsActive(index);
  };
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [apiData, setApiData] = useState<any | null>(null);

  // useEffect(() => {
  //   // Fetch data from your API
  //   fetch(`/api/Blog/GET/blogs?page=${currentPage}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setApiData(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  // }, [currentPage]);

  const handlePageChange = (event: React.ChangeEvent<any>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Head>
        <title>{seoData.Blog.title}</title>
        <meta name="description" content={seoData.Blog.description} />
        <meta name="keywords" content={seoData.Blog.keywords} />
        <meta name="title" content={seoData.Blog.metaTitle} />
      </Head>
      <div className="main mx-auto" style={{ background: '#F9FBFF' }}>
        <div className="bg-white">
          <Header />
          <Float/>
        </div>
        <div
          className="w-[100%] max-w-[1377.5px] mx-auto flex flex-col px-0 md:px-[40px] items-center justify-center"
          style={{ background: '#F9FBFF' }}
        >
          <div style={{marginTop:"120px"}}>
            {' '}
            <h1 className="text-center py-[10px] text-[#151448] font-semibold text-[40px] md:text-[60px] capitalize pb-[20px] md:pb-[30px]">
              Latest Articles
            </h1>{' '}
          </div>
          {/*<div>*/}
          {/*  <div className="w-[100%] px-[20px] py-[40px] gap-[20px] md:px-0 flex justify-between">*/}
          {/*    <div className="w-[95vw] gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">*/}
          {/*      {apiData &&*/}
          {/*          apiData.data.map((item:any, index:number) => (*/}
          {/*              <BlogCards*/}
          {/*                  key={index}*/}
          {/*                  img={item.image}*/}
          {/*                  title={item.title}*/}
          {/*                  description={item.description}*/}
          {/*                  url={item.slug}*/}
          {/*              />*/}
          {/*          ))}*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  {apiData && (*/}
          {/*      <div className="w-[100%] flex justify-center items-center mt-[40px]">*/}
          {/*      <Pagination*/}
          {/*          count={apiData.totalPages}*/}
          {/*          page={apiData.page}*/}
          {/*          onChange={handlePageChange}*/}
          {/*      />*/}
          {/*      </div>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
        <GetStories />
        <FixedButton />
        {/*<Chat/>*/}

        <Footer />
      </div>
    </>
  );
};
export default BlogPage;
