export interface UserInterface {
    username?: string;
    name?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone: string;
    role: string;
    status?: string;
}


export interface DirectorInterface {
    image: string;
    mobileImage: string;
    name: string;
    post: string;
    company: string;
    address: string;
    message: string;
    icon: string;
}

export interface WhatWeInterface {
    _id: string,
    WhatWe: {
        title1: string;
        subtitle1: string;
        title2: string;
        subtitle2: string;
    }
}

export interface WhatWeNewInterface {

    title1: string;
    subtitle1: string;
    title2: string;
    subtitle2: string;

}


export interface ImageInterface {
    image: string[];

}

export interface TestimonialInterface {
    comment: string;
    companyLogo: string;
    imageUrl: string;
    designation: string;
    username: string;
}

export interface TechSectionInterface {
    bannerData: TechBanner,
    header: TechHeader[],

}

export interface TechHeader {
    image: string,
    alt: string,
}

export interface TechBanner {
    title: string,
    subtitle1: string,
    subtitle2: string,
    buttonName: string,
    buttonLink: string,
}

export interface ReasonsInterface {
    title: string;
    data: {
        title: string;
    }[];
}


export interface DevelopmentDataInterface {
    title: string;
    subtitle: string;
    leftData: {
        image: string;
        title: string;
    }[];
    rightData: {
        image: string;
        title: string;
    }[];
    centerContent: string;
    buttonName: string,
    buttonLink: string,
}

export interface TalkInterface {
    title: string;
    image: string;
}


export interface OurValues {

    items: OurValuesItemInterface[];
}

export interface OurValuesItemInterface {
    number: string;
    title: string;
    subtitle: string;
}


export interface TeemInterface {

    items: TeamItemInterface[];
}

export interface TeamItemInterface {
    name: string;
    role: string;
    imageSrc: string;
    alt: string;
}

export interface Portfolio2 {
    title: string;
    subtitle: string;
    items: Portfolio2ItemInterface[];
}

export interface Portfolio2ItemInterface {
    sideimage1: string;
    sideimage2: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

export interface BannerInterface {
    title: string;
    subtitle: string;
    image: string;
    button: {
        title: string;
        link?: string;
    };
    ourClients?: OurClientInterface[];
    awesomeNumbers?: AwesomeNumberInterface[];
}

export interface OurClientInterface {
    image: string;
}

export interface AwesomeNumberInterface {
    number: string;
    title: string;
}

export interface ServiceInterface {
    image: string;
    title: string;
    description: string;
}

export interface AdminLinksInterface {
    label: string;
    href: string;
    active: boolean;
    subLinks: SubLinksInterface[]
}

export interface SubLinksInterface {
    label: string;
    href: string;
    active: boolean;
}

export interface LoginInterface {
    username: string;
    password: string;
}


export interface AboutData {
    title: string;
    image: string;
    buttonName: string;
    buttonLink: string;
    fintechData: {
        title: string;
        subtitle: string;
    }[];
    satisfactionData: {
        number: string;
        subtitle: string;
    }[];
}

export interface PizzaHutInfo {
    title: string;
    subtitle: string;
    client: string;
    industry: string;
    businessType: string;
    services: string;
    images: string[];
}

export interface AboutUsBannerInterface {
    fix: string,
    title: string[];
    subtitle: string;
    image: string;

}

export interface ServiceAboutInterface {
    title: string;
    subtitle: string;
    paragraph: string;
    image: string;
    data?: {
        title: string;
    }[];

}

export interface ServiceAboutnewInterface {
    title: string;
    subtitle: string;
    paragraph: string;
    image: string;
    data: {
        title: string;
    }[];

}

export interface ServiceInterface {
    title: string;
    subtitle: string;

    data: {
        image: string;
        description: string;
        title: string;
        subtitle: string;

    }[];

}

export interface LetsInterface {
    title: string;
    subtitle: string;
    buttonName: string;
    image: string;

}

export interface JourneyInterface {
    title: string;
    subtitle1: string;
    subtitle2: string;

}

export interface EmpowermentInterfaces {
    title: string;
    subtitle1: string;
    subtitle2: string;
    year: string;
    business: string;
    image: string;
    yearTitle: string;
    businesspeople: string;


}

export interface PortFolioInterfaces {
    title: string;
    subtitle: string;
    image: string[];


}

export interface SolutionInterfaces {
    title: string;
    subtitle: string;
    data: {
        image: string;
        title: string;
    }[];


}
export interface PortfolioIndustryInterface {
    title: string;
    subtitle: string;
    data: {
        image: string;
        title: string;
        features:string[];
    }[];


}
export interface ChallengesInterface {
    title: string;
    subtitle: string;
    data: {
        number: string;
        title: string;
        features:string;
    }[];


}
export interface ReviewInterfaces {
    title: string;
    data: {
        message: string;
        name: string;
        company:string;
        type:string;
        image:string;
    }[];


}
export interface WebApplicationDevelopmentProcess {
    title: string;
    subtitle: string;
    data: {
        image: string;
        title: string;
        subtitle: string;
    }[];
}

export interface ContactBannerInterface {
    title: string;
    subtitle: string;
    image: string;

}


export interface Compliance {
    title: string;
    image: string;

    subtitle: string;
    data: {
        id: number;
        title: string;
    }[];
}

export interface Estimation {
    image: string;
    title: string;
    subtitle: string;
    buttonName: string,
    buttonHref: string,
    data: {
        content: string;
    }[];
}

export interface FaqInterFace {
    title: string;
    spantitle: string;
    tabData: {
        id: number;
        title: string;
        content: string;
        data: {
            title: string;
        }[];
    }[];
}

export interface Port {
    title: string;
    image: string;
}

export interface ServiceBannerInterface {
    title: string;
    subtitle: string;
    image: string;
    buttonName: string,
    buttonLink: string,
}

export interface PortFolioBannerInterface {
    title: string;

    image: string;
    icon: string,
}

export interface Assurance {
    image: string;
    title: string;
    buttonName: string;
    buttonLink: string;
    sideImage: string;
    data: {
        title: string;
        subtitle: string;
        icon: string;
    }[];
}


export interface BannerDataInterface {
    title: string[];
    fix: string;
    subtitle: string;
    image: string;
    button: string;
}

export interface BannerAdminInterface {
    _id: string,
    title: string,
    subtitle: string,
    backgroundImage: string,
    buttonName: string,
}

export interface AboutBannerInterface {
    _id: string,
    Banner: {
        title: string,
        subtitle: string,
        backgroundImage: string,
    }
}

export interface AboutLetWorkTogether {
    _id: string,
    Lets: {
        title: string,
        subtitle: string,
        backgroundImage: string,
        buttonName: string
    }
}

export interface ServiceBannerInterface1 {
    title: string,
    subtitle: string,
    backgroundImage: string,
    buttonName: string,
    buttonLink: string
}

export interface OurValueInterface {
    _id: string,
    aboutOurValue: ourValueArray[]
}

export interface ourValueArray {
    number: string,
    title: string,
    subtitle: string,

    [key: string]: string,
}

export interface Faq {
    title: string;
    subtitle: string;
    buttonName: string;
    buttonLink: string;
    tabData: {
        id: number;
        title: string;
        content: string;
    }[];
}

export interface BrandData {
    src: string;
    alt: string;
}

export interface ImageListInterface {
    img: string,
    title: string,

    [key: string]: string
}

export interface ImageListMainInterface {
    _id: string,
    ImageList: ImageListInterface[],
}

export interface TestimonialInterface {
    comment: string;
    companyLogo: string;
    imageUrl: string;
    designation: string;
    username: string;
}

export interface TeamData {
    imageSrc: string;
    name: string;
    role: string;
}

export interface ImageData {
    img: string;
    title: string;
    rows: number;
    cols: number;
}

export interface CaseStudyInterface {
    heading: string,
    imgUrl: string,
    org: string,
    description: string,
    href: string,

    [key: string]: string,
}

export interface SuccessStoryInterface {
    heading: string,
    imgUrl: string,
    description: string,
    subtitle: string,
    href: string,
    country: string,

    [key: string]: string,
}

export interface SuccessStoryStudyInterface {
    heading: string,
    imgUrl: string,
    description2: string,
    description: string,
    href: string,
    country: string,
}

export interface ProductOverviewInterface {
    _id: string,
    Data: {
        title: string,
        backgroundImage: string,
        Q1: string,
        Q2: string,
        Q3: string,
        A1: string,
        A2: string,
        A3: string,
        leftImage: string,
        productCount: string,
        productText: string,
        softwareText: string,
        webText: string,
        softwareDevelopedCount: string,
        webDesignCount: string,
    }
}

export interface DataServiceInterface {
    src: string,
    alt: string,
    title: string,
    description: string
}


export interface PortfolioDataInterface {
    title: string;
    subtitle: string;
    items: {
        image: string;
        mobile: string;
        title: string;
        subtitle: string;
        description: string;
    }[];
}

export interface ReasonInterface {
    backgroundImage: string,
    title: string,
    leftImage: string,
    reasonData: reasonData[],
    productCount: string,
    productText: string,
    WebCount: string,
    WebText: string,
    SoftwareCount: string,
    SoftwareText: string
}

export interface reasonData {
    title: string
}


interface BannerData {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ButtonName: string;
    ButtonHref: string;
}

interface AboutBanner {
    title: string;
    subtitle: string;
    image: string;
    paragraph: string;
}

export interface AboutDataItem {
    title: string;
}

interface EaseBanner {
    title: string;
    subtitle: string;
}

interface ReasonBanner {
    title: string;
    backgroundImage: string;
    leftImage: string;
    productCount: string;
    productText: string;
    softwareDevelopedCount: string;
    softwareText: string;
    webDesignCount: string;
    webText: string;
}

export interface ReasonDataItem {
    title: string;
}

interface DevelopmentBanner {
    title: string;
    subtitle: string;
    centerContent: string;
    buttonName: string;
    buttonLink: string;
}

export interface DevelopmentHeaderItem {
    image: string;
    title: string;
}

interface ProcessBanner {
    title: string;
}

export interface ProcessDataItem {
    id: number;
    title: string;
    content: string;
}

interface FaqBanner {
    title: string;
    subtitle: string;
    buttonName: string;
    buttonLink: string;
}

export interface FaqDataItem {
    id: number;
    title: string;
    content: string;
}

export interface InterfaceINDSERPage {
    BannerData: BannerData;
    AboutBanner: AboutBanner;
    AboutData: AboutDataItem[];
    EaseBanner: EaseBanner;
    ReasonBanner: ReasonBanner;
    ReasonData: ReasonDataItem[];
    DevelopmentBanner: DevelopmentBanner;
    DevelopmentHeaderLeft: DevelopmentHeaderItem[];
    DevelopmentHeaderRight: DevelopmentHeaderItem[];
    ProcessBanner: ProcessBanner;
    ProcessData: ProcessDataItem[];
    FaqBanner: FaqBanner;
    FaqData: FaqDataItem[];
}

export interface caseStudyInterface {
    bannerData: {
        title: string,
        subtitle: string,
        tagButton: string
    },
    caseStudies: caseStudiesHeader[]
}

export interface caseStudiesHeader {
    heading: string,
    imgUrl: string,
    org: string,
    description: string,
    href: string
}

export interface BlogInterface {
    id?: number
    body: any
    image?: any
    slug: string
    title: string
    is_featured: string
    description: string
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
}

export interface BlogPageInterface {
    slug: string;
    blog: BlogInterface;
    blogs: BlogInterface[];
}