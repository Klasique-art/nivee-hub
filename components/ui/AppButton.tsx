import React from 'react';
import Link from 'next/link';

// Base props common to both button and link variants
interface BaseProps {
    title?: string;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

// Props when rendering as a Link
interface LinkProps extends BaseProps {
    url: string;
    type?: never;
}

// Props when rendering as a button
interface ButtonProps extends BaseProps {
    url?: never;
    type?: 'button' | 'submit' | 'reset';
}

// Union type that allows for additional HTML attributes
type AppButtonProps = (LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) |
    (ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>);

const AppButton = ({
    url,
    title = "Button",
    onClick,
    type = "button",
    className = "",
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    icon,
    iconPosition = 'left',
    ...props
}: AppButtonProps) => {
    // Variant styles
    const variantClasses = {
        primary: `
            bg-gradient-to-r from-emerald-600 to-emerald-700
            text-white
            hover:from-emerald-700 hover:to-emerald-800
            focus:ring-emerald-500
            shadow-md hover:shadow-lg
            disabled:from-slate-300 disabled:to-slate-400
            dark:from-emerald-600 dark:to-emerald-700
            dark:hover:from-emerald-700 dark:hover:to-emerald-800
        `,
        secondary: `
            bg-slate-100 dark:bg-slate-700
            text-slate-900 dark:text-white
            hover:bg-slate-200 dark:hover:bg-slate-600
            focus:ring-slate-500
            border border-slate-300 dark:border-slate-600
            disabled:bg-slate-50 disabled:text-slate-400
            dark:disabled:bg-slate-800 dark:disabled:text-slate-500
        `,
        outline: `
            bg-transparent
            text-emerald-600 dark:text-emerald-400
            border-2 border-emerald-600 dark:border-emerald-500
            hover:bg-emerald-50 dark:hover:bg-emerald-900/20
            focus:ring-emerald-500
            disabled:border-slate-300 disabled:text-slate-400
            dark:disabled:border-slate-700 dark:disabled:text-slate-500
        `,
        ghost: `
            bg-transparent
            text-slate-700 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800
            focus:ring-slate-500
            disabled:text-slate-400 dark:disabled:text-slate-500
        `,
        danger: `
            bg-gradient-to-r from-red-600 to-red-700
            text-white
            hover:from-red-700 hover:to-red-800
            focus:ring-red-500
            shadow-md hover:shadow-lg
            disabled:from-slate-300 disabled:to-slate-400
        `,
    };

    // Size styles
    const sizeClasses = {
        sm: 'px-4 py-2 normal-text-2 min-h-[36px]',
        md: 'px-6 py-2.5 normal-text min-h-[44px]',
        lg: 'px-8 py-3.5 big-text-5 min-h-[52px]',
    };

    // Base classes
    const baseClasses = `
        relative
        inline-flex
        justify-center
        items-center
        gap-2
        ${fullWidth ? 'w-full' : 'w-max'}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        font-semibold
        rounded-xl
        whitespace-nowrap
        transition-all duration-300 ease-out
        cursor-pointer
        select-none
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:shadow-none
        active:scale-[0.98]
        ${loading ? 'pointer-events-none' : ''}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    // Content with loading state and icon
    const content = (
        <>
            {loading && (
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            )}
            {!loading && icon && iconPosition === 'left' && (
                <span className="shrink-0">{icon}</span>
            )}
            <span>{title}</span>
            {!loading && icon && iconPosition === 'right' && (
                <span className="shrink-0">{icon}</span>
            )}
        </>
    );

    // Render as Link when url is provided
    if (url) {
        return (
            <Link
                href={url}
                className={baseClasses}
                onClick={onClick}
                role="button"
                tabIndex={0}
                aria-label={title}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {content}
            </Link>
        );
    }

    // Render as button when no url is provided
    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button
            className={baseClasses}
            onClick={onClick}
            type={type}
            disabled={loading || buttonProps.disabled}
            aria-label={title}
            aria-busy={loading}
            {...buttonProps}
        >
            {content}
        </button>
    );
};

export default AppButton;