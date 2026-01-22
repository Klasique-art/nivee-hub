export interface NavLink {
    id: number;
    title: string;
    url: string;
}
export interface FooterLink {
    id: number;
    title: string;
    url: string;
    external?: boolean;
}
export interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
}
export interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
}
export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: any;
    hoverColor: string;
}

export interface ContactInfo {
    id: number;
    type: string;
    value: string;
    icon: any;
    href?: string;
}

