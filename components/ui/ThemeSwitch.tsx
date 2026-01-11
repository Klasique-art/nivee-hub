"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

interface ThemeState {
    mounted: boolean;
    isTransitioning: boolean;
}

const ThemeSwitch: React.FC = () => {
    const [state, setState] = useState<ThemeState>({
        mounted: false,
        isTransitioning: false
    });
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setState(prev => ({ ...prev, mounted: true }));
    }, []);

    const handleThemeToggle = (): void => {
        setState(prev => ({ ...prev, isTransitioning: true }));
        
        // Add a slight delay for the animation to feel more satisfying
        setTimeout(() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            
            // Reset transition state after animation completes
            setTimeout(() => {
                setState(prev => ({ ...prev, isTransitioning: false }));
            }, 300);
        }, 150);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleThemeToggle();
        }
    };

    // Loading state - return a skeleton that matches the final component size
    if (!state.mounted) {
        return (
            <div 
                className="w-16 h-8 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"
                role="status"
                aria-label="Loading theme toggle"
            >
                <span className="sr-only">Loading theme toggle...</span>
            </div>
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={handleThemeToggle}
            onKeyDown={handleKeyDown}
            className={`
                relative inline-flex items-center justify-between cursor-pointer
                w-16 h-8 p-1 rounded-full transition-all duration-300 ease-in-out
                bg-linear-to-r from-primary to-primary-100
                dark:from-accent dark:to-accent-50
                hover:from-primary-100 hover:to-primary-200
                dark:hover:from-accent-50 dark:hover:to-accent
                focus:outline-none transform
                ${state.isTransitioning ? 'pointer-events-none' : ''}
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            type="button"
            role="switch"
            aria-checked={isDark}
        >
            {/* Background glow effect */}
            <div 
                className={`
                    absolute inset-0 rounded-full transition-opacity duration-300
                    ${state.isTransitioning ? 'opacity-75' : 'opacity-0'}
                    bg-linear-to-r from-yellow-200 to-yellow-300
                    dark:from-indigo-400 dark:to-indigo-500
                    blur-sm scale-110
                `}
            />

            {/* Sliding indicator */}
            <div
                className={`
                    absolute top-1 left-1 w-6 h-6 rounded-full shadow-md
                    bg-linear-to-br from-accent to-accent-50
                    dark:from-primary dark:to-primary-100
                    transform transition-all duration-300 ease-out
                    ${isDark ? 'translate-x-8' : 'translate-x-0'}
                    ${state.isTransitioning ? 'scale-110' : 'scale-100'}
                    flex items-center justify-center
                `}
            >
                {/* Sun Icon */}
                <Sun 
                    className={`
                        w-4 h-4 text-white absolute
                        transition-all duration-300 ease-out
                        ${isDark 
                            ? 'opacity-0 rotate-180 scale-50' 
                            : 'opacity-100 rotate-0 scale-100'
                        }
                        ${state.isTransitioning && !isDark ? 'animate-spin' : ''}
                    `}
                />
                
                {/* Moon Icon */}
                <Moon 
                    className={`
                        w-4 h-4 text-white absolute
                        transition-all duration-300 ease-out
                        ${isDark 
                            ? 'opacity-100 rotate-0 scale-100' 
                            : 'opacity-0 -rotate-180 scale-50'
                        }
                        ${state.isTransitioning && isDark ? 'animate-pulse' : ''}
                    `}
                />
            </div>

            {/* Screen reader text */}
            <span className="sr-only">
                Current theme: {isDark ? 'dark' : 'light'}. 
                Click to switch to {isDark ? 'light' : 'dark'} theme.
            </span>
        </button>
    );
};

export default ThemeSwitch;