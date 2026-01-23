import React from 'react'
import type { Metadata } from 'next';

import { HeroSection, CTASection, WhoWeAreSection } from '@/components'

export const metadata: Metadata = {
    title: 'Nivee Hub | Online Learning Platform for Skill Development & Professional Courses',
    description: 'Unlock your potential with Nivee Hub - the premier e-learning platform offering expert-led courses in technology, business, creative arts, and professional development. Learn at your own pace with interactive lessons, certifications, and lifetime access.',
    keywords: [
        'online learning platform',
        'e-learning courses',
        'online courses Ghana',
        'professional development courses',
        'skill development online',
        'certification courses',
        'learn programming online',
        'business courses online',
        'Nivee Hub',
        'online education Ghana',
        'African e-learning platform',
        'self-paced learning',
        'video courses',
        'online training platform'
    ],
    authors: [{ name: 'Nivee Hub' }],
    creator: 'Nivee Hub',
    publisher: 'Nivee Hub',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://niveehub.com',
        title: 'Nivee Hub | Online Learning Platform for Skill Development & Professional Courses',
        description: 'Unlock your potential with Nivee Hub. Access thousands of expert-led courses in technology, business, and creative arts. Learn anytime, anywhere with interactive lessons and earn recognized certifications.',
        siteName: 'Nivee Hub',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Nivee Hub - Online Learning Platform for Professional Development',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nivee Hub | Online Learning Platform for Skill Development',
        description: 'Unlock your potential with expert-led online courses. Learn technology, business, and creative skills at your own pace.',
        images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'],
        creator: '@niveehub',
    },
    alternates: {
        canonical: 'https://niveehub.com',
    },
    category: 'education',
    classification: 'E-Learning Platform',
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'apple-mobile-web-app-title': 'Nivee Hub',
        'application-name': 'Nivee Hub',
        'msapplication-TileColor': '#10b981',
        'theme-color': '#10b981',
    },
};

const HomePage = async () => {

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Who We Are Section */}
            <WhoWeAreSection />

            {/* Call-to-Action Section */}
            <CTASection />

        </main>
    )
}

export default HomePage;