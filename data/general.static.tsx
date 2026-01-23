import {
    Phone,
    Mail
} from "lucide-react";

import { NavLink, FooterLink, FooterSection, ContactInfo } from "@/types/general.types";

export const navLinks: NavLink[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 4,
        title: "Courses",
        url: "/courses",
    },
];

export const companyInfo = {
    name: "Nivee Hub",
    tagline: "Programming Made Easy",
    location: "Ghana"
};

export const footerSections: FooterSection[] = [
    {
        id: 1,
        title: "Company",
        links: [
            { id: 1, title: "About Us", url: "/about-us" },
            { id: 2, title: "Our Team", url: "/team" },
        ]
    },
    {
        id: 4,
        title: "Support",
        links: [
            // { id: 1, title: "Help Center", url: "/help" },
            { id: 2, title: "Contact Us", url: "/contact" },
            { id: 3, title: "FAQs", url: "/faqs" },
        ]
    }
];

export const contactInfo: ContactInfo[] = [
    {
        id: 2,
        type: "Phone",
        value: "+233 548 285 798",
        icon: Phone,
        href: "tel:+233548285798"
    },
    {
        id: 3,
        type: "Email",
        value: "support@niveehub.com",
        icon: Mail,
        href: "mailto:support@niveehub.com"
    },
];

export const legalLinks: FooterLink[] = [
    { id: 1, title: "Privacy Policy", url: "/privacy" },
    { id: 2, title: "Terms of Service", url: "/terms" },
];
