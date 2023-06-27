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