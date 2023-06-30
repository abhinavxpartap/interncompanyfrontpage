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