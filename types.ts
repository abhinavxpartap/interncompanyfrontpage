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
    title1: string;
    subtitle1: string;
    title2: string;
    subtitle2: string;
}

export interface TestimonialInterface {
    comment: string;
    companyLogo: string;
    imageUrl: string;
    designation: string;
    username:string;
}

export interface TechSectionInterface {
    title: string;
    subtitle: string;
    Paragraph: string;
    button: {
        name: string;
        href: string;
    };
    data: {
        image: string;
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
    button: {
        name: string;
        href: string;
    };
}
export interface TalkInterface {
    title: string;
}


export interface OurValues {
  
    items: OurValuesItemInterface[];
}
export interface OurValuesItemInterface {
    number: string;
    title: string;
    subtitle: string;
}

export interface Portfolio2 {
     title:string;
     subtitle:string;
    items: Portfolio2ItemInterface[];
}
export interface Portfolio2ItemInterface {
    sideimage1: string;
    sideimage2: string;
    title: string;
    subtitle: string;
    description:string;
    link:string;
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
    button: {
        name: string;
        href: string;
    };
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
    content: string;
    industry: string;
    businessType: string;
    services: string;
    images: string[];
}
export interface AboutUsBannerInterface {
    title: string;
    subtitle: string;
    image: string;
    mobileImage: string;

}

export interface ServiceAboutInterface {
    title: string;
    subtitle: string;
    paragraph: string;
    image: string;

}
export interface LetsInterface {
    title: string;
    subtitle: string;
    mobileImage: string;
    image: string;

}
export interface JourneyInterface {
    title: string;
    subtitle1: string;
    subtitle2: string;

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
    button: {
        name: string;
        href: string;
    };
    data: {
        content: string;
    }[];
}

export  interface FaqInterFace{
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
export interface Port{
    title: string;

}
export interface ServiceBannerInterface {
    title: string;
    subtitle: string;
    image: string;
    mobileImage: string;
    button: {
        name: string;
        href: string;
    };
}

export interface Assurance {
    image: string;
    title: string;
    button: {
        name: string;
        href: string;
    };
    data: {
        title: string;
        subtitle: string;
        icon: string;
    }[];
}


export interface BannerDataInterface {
    title: string;
    subtitle: string;
    image: string;
    button:string;
}

export interface Faq {
    title: string;
    subtitle: string;
    button: {
        name: string;
        href: string;
    };
    tabData: {
        id: number;
        title: string;
        content: string;
    }[];
}

export interface BrandData {
    src:string;
    alt:string;
}