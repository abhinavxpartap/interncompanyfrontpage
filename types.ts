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