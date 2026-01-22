"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

import {
    contactInfo,
    legalLinks,
    companyInfo,
    footerSections
} from '@/data/general.static';
import { BgPattern } from '@/components';
import { logo1 } from '@/data/constants';

const Footer: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Handle scroll to top button visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        // Throttle scroll events for performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledScroll);
    }, []);

    // Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.getElementById('main-footer');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => {
            if (footerElement) {
                observer.unobserve(footerElement);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer
                id="main-footer"
                className={`relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                role="contentinfo"
                aria-label="Site footer"
            >
                <div className="inner-wrapper">
                    {/* Decorative background pattern */}
                    <BgPattern />

                    <div className="relative">
                        {/* Main Footer Content */}
                        <div role='contentinfo' className="inner-wrapper">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                                {/* Company Info & Newsletter */}
                                <div className="col-span-1 lg:col-span-4 space-y-4">
                                    {/* Logo & Company Description */}
                                    <div className="space-y-4">
                                        <Link
                                            href="/"
                                            className="inline-block group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg transition-all duration-200"
                                            aria-label={`${companyInfo.name} - Go to homepage`}
                                        >
                                            <Image
                                                src={logo1}
                                                alt={`${companyInfo.name} Logo`}
                                                width={200}
                                                height={200}
                                                className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-200 rounded-lg"
                                            />
                                        </Link>

                                        <div className="space-y-3">
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                                {companyInfo.name}
                                            </h2>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                Leading technology solutions provider in Ghana, delivering innovative
                                                digital transformation services to businesses across Africa and beyond.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Sections */}
                                <div className="col-span-1 lg:col-span-5 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {footerSections.map((section, index) => (
                                        <div
                                            key={section.id}
                                            className={`space-y-4 transform transition-all duration-500 ${isVisible
                                                    ? 'opacity-100 translate-y-0'
                                                    : 'opacity-0 translate-y-4'
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                        >
                                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                                                {section.title}
                                            </h3>
                                            <nav role="navigation" aria-label={`${section.title} links`}>
                                                <ul className="space-y-3">
                                                    {section.links.map((link) => (
                                                        <li key={link.id}>
                                                            <Link
                                                                href={link.url}
                                                                className="group flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent"
                                                                {...(link.external && {
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer"
                                                                })}
                                                            >
                                                                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                                                    {link.title}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="col-span-1 lg:col-span-3 space-y-4">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                                        Contact Info
                                    </h3>
                                    <address className="not-italic space-y-4">
                                        {contactInfo.map((info, index) => {
                                            const IconComponent = info.icon;
                                            const content = (
                                                <div
                                                    className={`flex items-start gap-3 group transform transition-all duration-300 ${isVisible
                                                            ? 'opacity-100 translate-x-0'
                                                            : 'opacity-0 -translate-x-4'
                                                        }`}
                                                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                                                >
                                                    <div className="shrink-0 w-5 h-5 mt-0.5">
                                                        <IconComponent
                                                            size={16}
                                                            className="text-accent group-hover:scale-110 transition-transform duration-200"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide">
                                                            {info.type}
                                                        </div>
                                                        <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-accent transition-colors duration-200">
                                                            {info.value}
                                                        </div>
                                                    </div>
                                                </div>
                                            );

                                            return info.href ? (
                                                <Link
                                                    key={info.id}
                                                    href={info.href}
                                                    className="block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-md"
                                                    {...(info.href.startsWith('http') && {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer"
                                                    })}
                                                >
                                                    {content}
                                                </Link>
                                            ) : (
                                                <div key={info.id}>
                                                    {content}
                                                </div>
                                            );
                                        })}
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* Social Media & Legal */}
                        <div className="border-t border-slate-400 dark:border-slate-700 mt-4">
                            <div className="inner-wrapper py-4">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                                    {/* Legal Links */}
                                    <nav
                                        className="flex flex-wrap items-center gap-4 md:gap-6"
                                        role="navigation"
                                        aria-label="Legal and policy links"
                                    >
                                        {legalLinks.map((link, index) => (
                                            <Link
                                                key={link.id}
                                                href={link.url}
                                                className={`text-xs text-slate-500 dark:text-slate-500 hover:text-accent transition-colors duration-200 focus:outline-none focus:text-accent ${isVisible
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                    }`}
                                                style={{ transitionDelay: `${index * 50 + 1000}ms` }}
                                            >
                                                {link.title}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="border-t border-slate-200 dark:border-slate-700">
                            <div className="inner-wrapper py-6">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                                    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`} style={{ transitionDelay: '1200ms' }}>
                                        <p>
                                            © {currentYear} {companyInfo.name}. All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 p-3 bg-linear-to-r from-accent to-accent-50 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 z-50 cursor-pointer ${showScrollTop
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
                    }`}
                aria-label="Scroll to top of page"
                title="Scroll to top"
            >
                <ChevronUp size={20} aria-hidden="true" />
            </button>
        </>
    );
};

export default Footer;