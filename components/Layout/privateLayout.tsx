import React, {useEffect, useState} from 'react';
import {SideNav} from "../../utils/Admin/SideNav";
import {AdminLinksInterface} from "../../types";
import Head from "next/head";
import {useAuth} from "../../context/AuthContext";
import {useRouter} from "next/router";

interface PrivateLayoutInterface {
    title: string;
    children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutInterface> = ({title, children}) => {
    const router = useRouter();
    // const {logout, user} = useAuth();
    const links: AdminLinksInterface[] = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: false,
            subLinks: []
        },
        {
            label: 'Common',
            href: '/admin/common',
            active: false,
            subLinks: [
                {
                    label: 'Company',
                    href: '/admin/common/OurBrands',
                    active: false
                },
                {
                    label: 'Case Study',
                    href: '/admin/common/CaseStudy',
                    active: false
                },
                {
                    label: 'Services',
                    href: '/admin/common/Service',
                    active: false
                },
                {
                    label: 'Team',
                    href: '/admin/common/Team',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/common/Testimonials',
                    active: false
                },
                {
                    label: 'Headers',
                    href: '/admin/common/Header',
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
                    label: 'How It Works',
                    href: '/admin/home/howItWorks',
                    active: false
                },
                {
                    label: 'Track Your Project',
                    href: '/admin/home/trackYourProject',
                    active: false
                },
                {
                    label: 'Stay On Top',
                    href: '/admin/home/stayOnTop',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/home/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/home/contactUs',
                    active: false
                },
            ]
        },
        {
            label:'About Us',
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
                    label: 'How It Works',
                    href: '/admin/home/howItWorks',
                    active: false
                },
                {
                    label: 'Track Your Project',
                    href: '/admin/home/trackYourProject',
                    active: false
                },
                {
                    label: 'Stay On Top',
                    href: '/admin/home/stayOnTop',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/home/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/home/contactUs',
                    active: false
                },
            ]
        },
        {
            label: 'Contact Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/contact/banner',
                    active: false
                },
                {
                    label: 'Form',
                    href: '/admin/contact/form',
                    active: false
                },
            ]
        },
        {
            label: 'FAQ Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/faq/banner',
                    active: false
                },
            ]
        },
        {
            label: 'Service Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/Service/ServiceBanner',
                    active: false
                },
                {
                    label: 'Clients',
                    href: '/admin/partner/clients',
                    active: false
                },


            ]
        },
        {
            label: 'Industries',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/landing/banner',
                    active: false
                },
                {
                    label: 'Process',
                    href: '/admin/landing/process',
                    active: false
                },
                {
                    label: 'Development Process',
                    href: '/admin/landing/developmentProcess',
                    active: false
                },
                {
                    label: 'Why Us',
                    href: '/admin/landing/whyUs',
                    active: false
                },
                {
                    label: 'How It Works',
                    href: '/admin/landing/howItWorks',
                    active: false
                },
                {
                    label: 'Technologies',
                    href: '/admin/landing/technologies',
                    active: false
                },
                {
                    label: 'Track Your Project',
                    href: '/admin/landing/trackYourProject',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/landing/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/landing/contactUs',
                    active: false
                },
            ]
        },



        {
            label: 'PortFolio',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/digitalMarketing/banner',
                    active: false
                },
                {
                    label: 'Strategy',
                    href: '/admin/digitalMarketing/strategy',
                    active: false
                },
                {
                    label: 'Offers',
                    href: '/admin/digitalMarketing/offers',
                    active: false
                },
                {
                    label: 'Why Us',
                    href: '/admin/digitalMarketing/whyUs',
                    active: false
                },
                {
                    label: 'Technologies',
                    href: '/admin/digitalMarketing/technologies',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/digitalMarketing/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/digitalMarketing/contactUs',
                    active: false
                },
            ]
        },
        {
            label: 'PortFolio Detailed',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/erp/banner',
                    active: false
                },
                {
                    label: 'Services',
                    href: '/admin/erp/services',
                    active: false
                },
                {
                    label: 'Offers',
                    href: '/admin/erp/offers',
                    active: false
                },
                {
                    label: 'Why Us',
                    href: '/admin/erp/whyUs',
                    active: false
                },
                {
                    label: 'Technologies',
                    href: '/admin/erp/technologies',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/erp/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/erp/contactUs',
                    active: false
                },
            ]
        },

    ];
    const [activeLinks, setActiveLinks] = useState(links);

    useEffect(() => {
        const updatedLinks = activeLinks.map((link) => {
            if (link.subLinks.length !== 0) {
                link.subLinks = link.subLinks.map((subLink) => ({
                    ...subLink,
                    active: subLink.href === router.asPath,
                }));
                link.active = link.subLinks.some((subLink) => subLink.active);
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
            <div className="flex  min-h-[100vh]">
                <div className="w-[230px] bg-white border-r-2 flex flex-col">
                    <SideNav links={activeLinks}/>
                </div>
                <div className="flex-1 flex-col">
                    <div className="bg-white flex items-center gap-[20px] p-[20px] border-b-2 h-[56px]">
                        <div className="flex-1 font-semibold tracking-[1px] text-[15px] text-[#022d72]">
                            Admin Panel
                        </div>
                        <div>
                            <a
                                // onClick={logout}
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
            </div>
        </div>
    </>
}

export default PrivateLayout;