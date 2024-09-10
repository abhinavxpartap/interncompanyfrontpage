import React from 'react'
import Link from 'next/link';
// import Img from 'next/image';
import fac from '../../public/Abhinav/Social Media.svg';
import img from '../../public/Abhinav/Group.svg';
import photo from '../../public/Abhinav/Group 15.svg';
import logo from '../../public/Abhinav/Social Media (1).svg';
import pic from '../../public/Abhinav/Social Media (2).svg';
import {Img} from '../../utils/Img';

const Foot = () => {
    return (
        <div className='bg-[#222222] max-w-[1440px] w-full justify-center md:p-[60px] p-[50px] mx-auto'>
            <div className='sm:flex sm:justify-between grid grid-cols-1 xl:gap-[0px] gap-[10px] items-start lg:pl-0 pl-19 mx-auto'>
                <div className='flex flex-col items-center'>
                    <ul>
                        <p className='font-bold text-[18px] text-[#FFFFFF] pb-4'>About</p>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Our story</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Benefits</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Team</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Careers</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <ul>
                        <p className='font-bold text-[18px] sm:text-start text-center text-[#FFFFFF] pb-4'>Services</p>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer'>Email Marketing</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Campaigns</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Branding</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Offline</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <ul>
                        <p className='font-bold text-[18px] sm:text-start text-center text-[#FFFFFF] pb-4 '>Industries</p>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Email Marketing</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Campaigns</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Branding</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Offline</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <ul>
                        <p className='font-bold text-[18px] sm:text-start text-center text-[#FFFFFF] pb-4'>Portfolio</p>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer'>Email Marketing</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer'>Campaigns</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer'>Branding</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 '>Offline</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <ul>
                        <p className='font-bold text-[18px] sm:text-start text-center text-[#FFFFFF] pb-4'>Blog</p>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>FAQs</li>
                        <li className='font-400 text-[14px] sm:text-start text-center text-[#FFFFFF] pb-2 hover:text-gray-400 cursor-pointer '>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start lg:justify-start justify-center flex-wrap pt-10 gap-[55px] mx-auto '>
                <div className='w-[541px] flex flex-col justify-center items-center gap-[30px] md:items-start'>
                    <p className='lg:text-[45px] md:text-[32px] sm:text-[25px] text-[22px] text-[#FFFFFF] font-bold md:text-start text-center  '>Would you like to work With Us? <br className=''/> <span className='underline underline-offset-8'>Let's!</span> Work together</p>
                    <button className='max-w-[156px] px-[32px] py-[8px] hover:bg-slate-600 border border-white rounded-full'>
                        <p className='text-[#FFFFFF] font-semibold text-center'>Hire Us</p>
                    </button>
                </div>
                <div className='w-[273px]'>
                    <h1 className='font-bold lg:text-start text-center text-[#FFFFFF] lg:text-xl text-lg'>ADDRESS</h1>
                    <div className='w-[273px] '>
                        <div className='w-[273px] mt-2'>
                            <p className='text-[#FFF] font-montserrat tracking-widest lg:text-[19px] text-[17px] font-thin lg:text-start text-center'>35 to vinh Dien,khuong Trung ,Thanh Xuan ,Ha Noi</p>
                        </div>
                        <div className='max-w-[273px] mt-2'>
                            <p className='text-[#FFF] font-montserrat lg:text-[19px] text-[16px] font-thin  lg:text-start text-center'>Phone:0123 456 789 </p>
                            <p className='text-[#FFF] font-montserrat  lg:text-[19px] text-[16px]  font-thin  lg:text-start text-center'>Email:contact @penguin.vn </p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[300px] '>
                    <p className='text-[#FFFFFF] font-bold lg:text-xl text-lg  lg:text-start text-center'>CONTACT US</p>
                    <div className='w-[300px] justify-center flex items-center lg:gap-8 gap-6  pt-6'>
                        <div className='w-[44px] h-[44px] inline-flex items-center'>
                            <Link href='/'>
                                <Img src={fac} alt='img1' />
                            </Link>
                        </div>
                        <div className='w-[44px] h-[44px] inline-flex items-center'>
                            <Link href='/' className='w-[26.43px] h-[26.43px]'>
                                <Img  src={img} alt='img2'/>
                            </Link>
                        </div>
                        <div className='w-[44px] h-[44px] inline-flex items-center'>
                            <Link href='/' className='w-[22.43px] h-[22.43px]'>
                                <Img  src={photo} alt='img3' />
                            </Link>
                        </div>
                        <div className='w-[44px] h-[44px] inline-flex items-center'>
                            <Link href='/'>
                                <Img  src={logo} alt='img4' />
                            </Link>
                        </div>
                        <div className='w-[44px] h-[44px] inline-flex items-center'>
                            <Link href='/' >
                                <Img src={pic} alt='img5'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[325px] pt-[40px]'>
                <p className='text-gray-400 font-thin lg:text-start text-center
                '>&copy; 2022 Alumel - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Foot;