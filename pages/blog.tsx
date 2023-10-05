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

  useEffect(() => {
    // Fetch data from your API
    fetch(`/api/Blog/GET/blogs?page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [currentPage]);

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
          <div className="w-[100%] flex flex-col lg:flex-row items-center py-[50px] md:py-[100px] gap-[40px]">
            <div className="relative w-[90vw] rounded-[10px]  lg:w-[48vw]">
              <Img
                src="/BlogImage.svg"
                className="w-[100%]"
                alt={'BlogImage'}
              />
              <div
                className="absolute top-[11px] right-[11px]  rounded-[5px] px-[10px] xxl:text-[16px] md:text-[13px] leading-[28px] text-[black] font-medium"
                style={{
                  background: '#ffffff',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                }}
              >
                Healthcare & Fitness
              </div>
            </div>
            <div className="w-[90vw] lg:w-[48vw] flex flex-col gap-[15px]">
              <h1 className="text-[#151448] text-[22px] leading-[28px] md:leading-[45px] md:text-[35px] font-semibold">
                How much does it cost to build a HIPAA-Compliant platform for
                medical supplies delivery?
              </h1>
              <p className="text-[#444444] text-[14px] md:text-[16px] font-normal">
                In the current era of global interconnectivity, where healthcare
                information is increasingly being shared through digital means,
                safeguarding patient privacy and upholding data security are . .
                . . .
              </p>
              <p className="text-[#444444] text-[14px] md:text-[16px] font-normal">
                Author Name 20 Jun 2023
              </p>
            </div>
          </div>
          <div>
            {' '}
            <h1 className="text-center text-[#151448] font-semibold text-[40px] md:text-[60px] capitalize pb-[20px] md:pb-[30px]">
              Latest Articles
            </h1>{' '}
          </div>
          <div>
            <div className="w-[100%] px-[20px] gap-[20px] md:px-0 flex justify-between">
              <div className="w-[95vw] gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {apiData &&
                    apiData.data.map((item:any, index:number) => (
                        <BlogCards
                            key={index}
                            img={item.image}
                            title={item.title}
                            description={item.description}
                            url={item.slug}
                        />
                    ))}
              </div>
            </div>

            {apiData && (
                <div className="w-[100%] flex justify-center items-center mt-[40px]">
                <Pagination
                    count={apiData.totalPages}
                    page={apiData.page}
                    onChange={handlePageChange}
                />
                </div>
            )}
          </div>
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
