import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import seoData from '../data/seoData.json';
import Data from '../data/blogData.json';
import { BlogCards } from '../components/BlogCard';
import { Img } from '../utils/Img';
import { GetStories } from '../components/getStories';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/footer';
import FixedButton from "../components/FixedButton";

const content = [
  {
    title:
      'Does a Medical Supplies Shipping Software need to Adhere to HIPAA Act?',
  },
  {
    title: 'Exploring the HIPAA Compliant Medical Supplies Platform Cost',
  },
  {
    title:
      'Factors Affecting the HIPAA Compliant Medical Supplies Platform Cost',
  },
  {
    title: 'Key Considerations for Building a HIPAA-Compliant Platform',
  },
  {
    title: 'How to Develop a HIPAA Compliant Platform for Medical Delivery?',
  },
  {
    title:
      'How to Reduce the Cost of Creating a HIPAA Compliant Mobile App for Medical Supplies Delivery?',
  },
  {
    title:
      'How Can Zuca Help You Develop a HIPAA-Compliant Medical Supplies Delivery Platform?',
  },
];

const SocialIcons = [
  {
    icon: '/facebook.svg',
  },
  {
    icon: '/twitter.svg',
  },
  {
    icon: '/link.svg',
  },
  {
    icon: '/reddit.svg',
  },
];

const description = [
  {
    description:
      'In the current era of global interconnectivity, where healthcare information is increasingly being shared through digital means, safeguarding patient privacy and upholding data security are of utmost importance. To address challenges like these, the Health Insurance Portability and Accountability Act (HIPAA) comes into play.',
  },
  {
    description:
      'HIPAA (Health Insurance Portability and Accountability Act) is a set of rules governing the handling and protection of Protected Health Information (PHI). According to the act, the information created or received by healthcare providers or their partners must always be protected.',
  },
  {
    description:
      'HIPAA sets strict encryption and access control standards to protect personal health information. Encryption scrambles the data, making it incomprehensible to unauthorized individuals. This additional layer of protection makes it difficult for unauthorized eyes to access and decipher personal patient data and information. Apart from this, HIPAA also governs the implementation of robust access controls. These controls decide who can access sensitive healthcare data and under what circumstances.',
  },
  {
    description:
      'This includes transportation and logistics providers that handle data transmission involving protected health information (PHI). In addition, non-emergency medical transportation firms hired by health agencies are also classified as business associates and subject to HIPAA regulations.',
  },
  {
    description:
      'People trust HIPAA-compliant medical delivery software because it guarantees the privacy and security of their sensitive health information. This software ensures that unauthorized access or disclosure of data is prevented. Compliance with HIPAA regulations clearly indicates a commitment to maintaining strict standards and safeguards, thereby boosting the users’ confidence by ensuring their data is handled with the utmost care and confidentiality.',
  },
  {
    description:
      'If you, too, are looking to build a HIPAA Compliant platform for medical delivery, this article will help you understand the overall cost of developing a similar software or an app. In addition to understanding the various factors that affect the HIPAA Compliant medical supplies platform cost, we will also look at the key considerations required to build a HIPAA-compliant medical supplies delivery app.',
  },
];

const blogContent = [
  {
    title: 'Protect Patient Privacy',
    description:
      'Well, the answer to your question is yes! Suppose your business deals with Private Health Information such as medical supplies, medical equipment, pharmacy items, or any other healthcare product. In that case, it’s necessary to adhere to the HIPAA Act to ensure the privacy and security of sensitive patient data.',
  },
  {
    title: 'Ensure Data Security',
    description:
      'HIPAA-compliant software uses strong security features like locks, passwords, and records to keep patient information safe while it’s stored, moved, or delivered. This helps prevent hackers or unauthorized people from getting access to the information and keeps patient details private and secure.',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'HIPAA rules say that healthcare organizations and their partners must follow certain rules to protect patient information. Developing a HIPAA-compliant medical supplies distribution platform that follows these rules shows that a business follows the law, which helps them avoid getting in trouble and damaging their reputation.',
  },
  {
    title: 'Build Trust and Reputation',
    description:
      'Using HIPAA-compliant software shows that you take patient privacy and data security seriously. This helps healthcare providers, patients, and other app users to trust your business and consider you a reliable and trustworthy healthcare partner.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Exploring the HIPAA Compliant Medical Supplies Platform Cost',
    description:
      'To give you a rough idea, the cost of developing a HIPAA-compliant medical supplies delivery platform can vary between $45,000 to $200,000. Further factors impact the overall development cost, including the complexity of the software, the hourly rate and location of the software development agency, the features to be implemented in the software, etc. Even though the total budget for app development may vary as per the type of software required and the services it should offer, it is necessary to get in touch with a dedicated healthcare software development company like Zuca that can offer you clear cost estimates by prioritizing the features based on your business requirements.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
  {
    title: 'Competitive Advantage',
    description:
      'In the healthcare industry, with strict rules, having shipping and logistics software that follows HIPAA regulations can make your business stand out from the competition. It shows that you understand the unique needs of healthcare providers and can provide them with secure and compliant transportation and logistics services.',
  },
];

const BlogDetailVeiw: React.FC = () => {


  const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
      const updateScrollCompletion = () => {
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        if (scrollHeight) {
          setCompletion(
            Number((currentProgress / scrollHeight).toFixed(2)) * 100
          );
        }
      };
      window.addEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
  };

  const mycompletion = useReadingProgress();

  return (
    <>
      <Head>
        <title>{seoData.Blog.title}</title>
        <meta name="description" content={seoData.Blog.description} />
        <meta name="keywords" content={seoData.Blog.keywords} />
        <meta name="title" content={seoData.Blog.metaTitle} />
      </Head>
      <div className="main mx-auto relative" style={{ background: '#F9FBFF' }}>
        <Header />
        <span
          style={{ transform: `translateX(${mycompletion - 100}%)` }}
          className="fixed top-[78px] bg-[#0078FF] h-1 w-full  z-[10]"
        />
        <div
          className="w-[100%] max-w-[1877.5px] mx-auto flex flex-col items-center justify-center"
          style={{ background: '#F9FBFF' }}
        >
          <div className="w-[100%] flex flex-col items-center">
            <div className="relative  w-[100%]">
              <Img
                src="/blogBanner.svg"
                className="w-[100%]"
                alt={'BlogImage'}
              />
            </div>
            <div className="w-[100%] px-[20px] md:px-[60px] flex flex-col gap-[10px] py-[60px]">
              <p className="text-[#31D7A9] text-[15px] lg:text-[18px] font-medium">
                Healthcare & Fitness
              </p>
              <h1 className="text-[#151448] text-[20px] lg:text-[22px] leading-[28px] lg:leading-[30px]  font-semibold">
                How much does it cost to build a HIPAA-Compliant platform for
                medical supplies delivery?
              </h1>
              <p className="text-[#444444] lg:text-[14px] text-[12px] font-normal">
                Author Name 20 Jun 2023
              </p>
            </div>
          </div>
          <div className="w-[100%] px-[20px] md:px-[60px] flex flex-col md:flex-row gap-[30px]">
            <div className=" w-[90vw] md:w-[30vw] gap-[20px] flex flex-col">
              <h1 className="text-[#444444] text-[24px] font-normal">
                Contents
              </h1>
              <hr className="border-[1px] w-[97%] border-[#979797]" />
              <div className="flex flex-col  gap-[15px]">
                {content.map((item, index: number) => (
                  <p
                    key={index}
                    className="text-[#979797] text-[16px] md:text-[11px] lg:text-[16px] font-normal"
                  >
                    {item.title}
                  </p>
                ))}
              </div>
              <hr className="border-[1px] w-[97%]  border-[#979797]" />
              <div className="flex flex-row gap-[30px] pl-[5px] ">
                {SocialIcons.map((item, index: number) => (
                  <Img
                    key={index}
                    src={item.icon}
                    className="w-[24px] md:w-[20px] lg:w-[24px] cursor-pointer"
                    alt={'SocialIcon'}
                  />
                ))}
              </div>
              <p className="cursor-pointer text-[#444444] text-[14px] lg:text-[18px] font-normal">
                Share this Blog
              </p>
            </div>
            <div className="w-[90vw] md:w-[65vw] flex flex-col gap-[20px]">
              <div>
                {description.map((item, index: number) => (
                  <p
                    key={index}
                    className="text-[#757B8A] text-[14px] leading-[26px] lg:text-[16px] lg:leading-[38px]"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
              <div>
                <Img
                  src="/BlogdetailImage.jpg"
                  className="w-[100%]"
                  alt={'BlogImage'}
                />
              </div>
              <div>
                <p className="text-[#757B8A] text-[14px] leading-[26px] md:text-[12px] md:leading-[26px] lg:text-[16px] lg:leading-[38px]">
                  According to recent reports, the online pharmacy market size
                  is expected to reach $31.64 billion in 2023 and will increase
                  to $ 52.33 billion in 2027, witnessing a CAGR of 13.40% from
                  2023 to 2027. Thus, now is the right time if you wish to
                  develop a medicine delivery app that is HIPAA compliant
                  considering it is bound to gain instant market acceptance.
                  Before moving on to the costing details, let us understand if
                  healthcare logistics and transportation software really need
                  to adhere to HIPAA complianc
                </p>
              </div>
              <div>
                <h1 className="text-[#444444] text-[16px] lg:text-[20px] xl:text-[24px] font-semibold">
                  Does a Medical Supplies Shipping Software need to Adhere to
                  HIPAA Act?
                </h1>
                <p className="text-[#757B8A] text-[14px] mt-[10px] leading-[26px] lg:text-[16px] lg:leading-[38px]">
                  Well, the answer to your question is yes! Suppose your
                  business deals with Private Health Information such as medical
                  supplies, medical equipment, pharmacy items, or any other
                  healthcare product. In that case, it’s necessary to adhere to
                  the HIPAA Act to ensure the privacy and security of sensitive
                  patient data.
                </p>
                <p className="text:[#444444] text-[14px] lg:text-[14px] mt-[20px] mb-[10px] xl:text-[16px] font-semibold">
                  Here are the various reasons why you need a HIPAA-compliant
                  medical supplies distribution platform:
                </p>
              </div>
              {blogContent.slice(0, 6).map((item, index: number) => (
                <div key={index}>
                  <h1 className="text-[#101010] text-[16px] lg:text-[18px] font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-[#757B8A] text-[14px] mt-[10px] leading-[26px] lg:text-[16px] lg:leading-[38px]">
                    {item.description}
                  </p>
                </div>
              ))}
              <div>
                <Img
                  src="/BlogdetailImage1.jpg"
                  className="w-[100%]"
                  alt={'BlogImage'}
                />
              </div>
              {blogContent.slice(6, 13).map((item, index: number) => (
                <div key={index}>
                  <h1 className="text-[#101010] text-[16px] lg:text-[18px] font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-[#757B8A] text-[14px] mt-[10px] leading-[26px] lg:text-[16px] lg:leading-[38px]">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="flex flex-row gap-[20px] items-center">
                <div className="w-[80px] lg:w-[100px] rounded-full">
                  <Img
                    src="/author.svg"
                    className="w-[100%]"
                    alt={'AuthorImage'}
                  />
                </div>
                <div>
                  <p className="text-[#757B8A] text-[14px] lg:text-[16px] font-medium">
                    The Author
                  </p>
                  <h1 className="text-[#101010] text-[18px] lg:text-[18px] font-medium">
                    Author Name
                  </h1>
                  <p className="text-[#101010]  text-[14px] lg:text-[18px] font-normal">
                    Designation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1377.5px] ">
            <div className="w-[100%] flex flex-col px-[20px] md:px-[40px] py-[50px]">
              <h1 className="text-[#151448] text-start mb-[25px]  text-[38px] md:text-[60px] font-semibold">
                Read More Blogs
              </h1>
              <div className="w-[100%] mx-auto md:mx-0">
                <div className="w-[100%] gap-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {Data.BlogData.slice(0, 3).map((item, index: number) => (
                    <BlogCards
                      key={index}
                      AuthorName={item.AuthorName}
                      img={item.image}
                      title={item.title}
                      description={item.description}
                      url={item.URL}
                      categories={item.categories}
                      Date={item.Date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetStories />
        <FixedButton />

        <Footer />
      </div>
    </>
  );
};
export default BlogDetailVeiw;
