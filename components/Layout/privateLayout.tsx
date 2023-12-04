import React, { useEffect, useState } from 'react';
import { SideNav } from "../../utils/Admin/SideNav";
import Head from "next/head";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

interface PrivateLayoutInterface {
    title: string;
    children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutInterface> = ({title, children}) => {
    const router = useRouter();
    const { logout, user } = useAuth();
    const [navlink, setNavlink] = useState<any[]>([]);
    useEffect(() => {
        fetch('/api/services/GET/services')
            .then((response) => response.json())
            .then((data) => setNavlink(data))
            .catch((error) => console.error('Error fetching services data:', error));
    }, []);

    const [navlink1, setNavlink1] = useState<any[]>([]);
    useEffect(() => {
        fetch('/api/industry/GET/indsutries')
            .then((response) => response.json())
            .then((data) => setNavlink1(data))
            .catch((error) => console.error('Error fetching industries data:', error));
    }, []);

    const links: any[] = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: false,
            subLinks: []
        },
        {
            label: 'CMS',
            href: '',
            active: false,
            subLinks: [
                {
                    label: 'Blog',
                    href: '/admin/blog/list',
                    active: false,
                    subLinks: []
                },
                {
                    label: 'Events',
                    href: '/admin/event/list',
                    active: false,
                    subLinks: []
                },
                {
                    label: 'Articles',
                    href: '/admin/article/list',
                    active: false,
                    subLinks: []
                },
                {
                    label: 'News',
                    href: '/admin/news/list',
                    active: false,
                    subLinks: []
                },
                {
                    label: 'Jobs',
                    href: '/admin/job/list',
                    active: false,
                    subLinks: []
                }
            ]
        },
        {
            label: 'Common',
            href: '/admin/common',
            active: false,
            subLinks: [
                {
                    label: 'Our Brands',
                    href: '/admin/common/OurBrands',
                    active: false
                },
                {
                    label: 'Case Study',
                    href: '/admin/common/CaseStudy',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/common/Testimonials',
                    active: false
                },
                {
                    label: 'Team',
                    href: '/admin/common/Team',
                    active: false
                },
                {
                    label: 'Headers',
                    href: '/admin/common/Header',
                    active: false
                },
                {
                    label:'Our Tech',
                    href:'/admin/common/OurTech',
                    active: false
                },
                {
                    label:'Footer',
                    href:'/admin/common/Footer',
                    active:false
                },
                {
                    label:'Our Success Story',
                    href:'/admin/common/OurSuccessStory',
                    active: false
                }
            ]
        },
        {
            label: 'Seo',
            href: '',
            active: false,
            subLinks: [
                {
                    label: 'Home Page',
                    href: '/admin/seo/home',
                    active: false
                },
                {
                    label: 'Contact Page',
                    href: '/admin/seo/contact',
                    active: false
                },
                {
                    label: 'FAQ Page',
                    href: '/admin/seo/faq',
                    active: false
                },
                {
                    label: 'Partner Page',
                    href: '/admin/seo/partner',
                    active: false
                },
                {
                    label: 'Landing Page',
                    href: '/admin/seo/landing',
                    active: false
                },
                {
                    label: 'Web Design Page',
                    href: '/admin/seo/services/webDesign',
                    active: false
                },
                {
                    label: 'E-Commerce Page',
                    href: '/admin/seo/services/eCommerce',
                    active: false
                },
                {
                    label: 'Video Games Page',
                    href: '/admin/seo/services/videoGames',
                    active: false
                },
                {
                    label: 'Digital Marketing Page',
                    href: '/admin/seo/services/digitalMarketing',
                    active: false
                },
                {
                    label: 'ERP Page',
                    href: '/admin/seo/services/erp',
                    active: false
                },
                {
                    label: 'Mobile & App Development Page',
                    href: '/admin/seo/services/mobileAppDevelopment',
                    active: false
                },
                {
                    label: 'Get Started Page',
                    href: '/admin/seo/getStarted',
                    active: false
                },
                {
                    label: 'Thank You Page',
                    href: '/admin/seo/thankYou',
                    active: false
                },
                {
                    label: 'Privacy Policy Page',
                    href: '/admin/seo/privacy',
                    active: false
                },
                {
                    label: 'Terms Page',
                    href: '/admin/seo/terms',
                    active: false
                },
            ]
        },
        {
            label: 'Config',
            href: '',
            active: false,
            subLinks: [
                {
                    label: 'Logos',
                    href: '/admin/config/logos',
                    active: false
                },
                {
                    label: 'Email',
                    href: '/admin/config/email',
                    active: false
                },
                {
                    label: 'Social Media',
                    href: '/admin/config/social',
                    active: false
                },
                {
                    label: 'Integrations',
                    href: '/admin/config/scripts',
                    active: false
                },
            ]
        },
        {
            label:'Home Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/landing/Banner',
                    active: false
                },
                {
                    label: 'Product Overview',
                    href: '/admin/landing/ProductOverview',
                    active: false
                },
                {
                    label: 'Expert Team',
                    href: '/admin/landing/ExpertTeam',
                    active: false
                },
                {
                    label: 'Service',
                    href: '/admin/landing/Service',
                    active: false
                }
            ]
        },
        {
            label: 'About Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/aboutUs/Banner',
                    active: false
                },
                {
                    label: 'What We',
                    href: '/admin/aboutUs/WhatWe',
                    active: false
                },
                {
                    label: 'Image List',
                    href: '/admin/aboutUs/ImageList',
                    active: false
                },
                {
                    label:'Our Value',
                    href:'/admin/aboutUs/OurValue',
                    active: false
                },
                {
                    label:'Let Work Together',
                    href:'/admin/aboutUs/LetWorkTogether',
                    active: false
                }
            ]
        },
        {
            label: 'Industries Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/Industries/Banner',
                    active: false
                },
                {
                    label: 'About',
                    href: '/admin/Industries/About',
                    active: false
                },
                {
                    label:'Compliances',
                    href:'/admin/Industries/Compliances',
                    active:false
                },
                {
                  label:'Faq',
                  href:'/admin/Industries/Faq',
                  active: false
                },
                {
                    label:'Technology',
                    href:'/admin/Industries/Technology',
                    active: false
                }
            ]
        },
    ];
    const combinedLinks = [...links];
    useEffect(() => {
        if (navlink1) {
            const newLinks1 = navlink1.map((d: any) => ({
                label: d.name,
                href: `/admin/${d.name}`,
                active: false,
                subLinks: [
                    {
                        label: 'Banner',
                        href: `/admin/${d.name}/Banner`,
                        active: false
                    },
                    {
                        label: 'About',
                        href: `/admin/${d.name}/About`,
                        active: false
                    },
                    {
                        label: 'EaseBanner',
                        href: `/admin/${d.name}/EaseBanner`,
                        active: false
                    },
                    {
                        label: 'ReasonBanner',
                        href: `/admin/${d.name}/PrcessBanner`,
                        active: false
                    },
                    {
                        label: 'DevelopmentBanner',
                        href: `/admin/${d.name}/DevelopmentBanner`,
                        active: false
                    },
                    {
                        label: 'ProcessBanner',
                        href: `/admin/${d.name}/PrcessBanner`,
                        active: false
                    },
                    {
                        label: 'Faq',
                        href: `/admin/${d.name}/Faq`,
                        active: false
                    }
                ]
            }));

            // Add the new links to the combinedLinks array outside the object
            combinedLinks.push(...newLinks1);
        }
    }, [navlink1]);

    const [activeLinks, setActiveLinks] = useState(links);
    useEffect(() => {
        const updatedLinks = activeLinks.map((link:any) => {
            if (link.subLinks?.length !== 0) {
                link.subLinks = link.subLinks?.map((subLink:any) => ({
                    ...subLink,
                    active: subLink.href === router.asPath,
                }));
                link.active = link.subLinks?.some((subLink:any) => subLink.active);
            } else {
                link.active = link.href === router.asPath;
            }
            return link;
        });
        setActiveLinks(updatedLinks);
    }, [router.asPath]);

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="main bg-[#F5F9FF]">
            {
                user ?
            <div className="flex  min-h-[100vh]">
                <div className="w-[230px] bg-white border-r-2 flex flex-col">
                    <SideNav links={combinedLinks}/>
                </div>
                <div className="flex-1 flex-col">
                    <div className="bg-white flex items-center gap-[20px] p-[20px] border-b-2 h-[56px]">
                        <div className="flex-1 font-semibold tracking-[1px] text-[15px] text-[#022d72]">
                            Admin Panel
                        </div>
                        <div>
                            <a
                                onClick={logout}
                                className="text-[#FF0000] font-semibold text-[14px] cursor-pointer"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 p-[15px] main-admin-container h-full">
                        {children}
                    </div>
                </div>
            </div>:<div/>
            }
        </div>
    </>
}

export default PrivateLayout;







