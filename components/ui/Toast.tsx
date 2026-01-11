"use client";

import React, { useEffect } from 'react';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
    onRemove: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
    id,
    type,
    title,
    message,
    duration = 5000,
    onRemove
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onRemove(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onRemove]);

    const getToastStyles = () => {
        const baseStyles = "relative overflow-hidden rounded-lg shadow-lg border backdrop-blur-sm";

        switch (type) {
            case 'success':
                return `${baseStyles} bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800`;
            case 'error':
                return `${baseStyles} bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800`;
            case 'warning':
                return `${baseStyles} bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800`;
            case 'info':
            default:
                return `${baseStyles} bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800`;
        }
    };

    const getIconAndColor = () => {
        switch (type) {
            case 'success':
                return {
                    icon: <Check className="w-5 h-5" />,
                    iconColor: 'text-green-600 dark:text-green-400',
                    titleColor: 'text-green-900 dark:text-green-100',
                    messageColor: 'text-green-700 dark:text-green-300'
                };
            case 'error':
                return {
                    icon: <AlertCircle className="w-5 h-5" />,
                    iconColor: 'text-red-600 dark:text-red-400',
                    titleColor: 'text-red-900 dark:text-red-100',
                    messageColor: 'text-red-700 dark:text-red-300'
                };
            case 'warning':
                return {
                    icon: <AlertTriangle className="w-5 h-5" />,
                    iconColor: 'text-yellow-600 dark:text-yellow-400',
                    titleColor: 'text-yellow-900 dark:text-yellow-100',
                    messageColor: 'text-yellow-700 dark:text-yellow-300'
                };
            case 'info':
            default:
                return {
                    icon: <Info className="w-5 h-5" />,
                    iconColor: 'text-blue-600 dark:text-blue-400',
                    titleColor: 'text-blue-900 dark:text-blue-100',
                    messageColor: 'text-blue-700 dark:text-blue-300'
                };
        }
    };

    const { icon, iconColor, titleColor, messageColor } = getIconAndColor();

    return (
        <div
            className={`${getToastStyles()} transform transition-all duration-300 ease-out animate-in slide-in-from-right-full fade-in`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            {/* Progress bar */}
            <div
                className={`absolute top-0 left-0 h-1 ${type === 'success' ? 'bg-green-500' :
                    type === 'error' ? 'bg-red-500' :
                        type === 'warning' ? 'bg-yellow-500' :
                            'bg-blue-500'
                    } animate-pulse`}
                style={{
                    width: '100%',
                    animation: `shrink ${duration}ms linear forwards`
                }}
            />

            <div className="flex items-start gap-3 p-4">
                {/* Icon */}
                <div className={`shrink-0 ${iconColor} mt-0.5`}>
                    {icon}
                </div>

                {/* Content */}
                <div className="grow min-w-0">
                    <h4 className={`normal-text font-semibold ${titleColor}`}>
                        {title}
                    </h4>
                    {message && (
                        <p className={`normal-text-2 mt-1 ${messageColor}`}>
                            {message}
                        </p>
                    )}
                </div>

                {/* Close button */}
                <button
                    onClick={() => onRemove(id)}
                    className={`shrink-0 rounded-md p-1.5 transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 ${type === 'success' ? 'focus:ring-green-500 text-green-600 dark:text-green-400' :
                        type === 'error' ? 'focus:ring-red-500 text-red-600 dark:text-red-400' :
                            type === 'warning' ? 'focus:ring-yellow-500 text-yellow-600 dark:text-yellow-400' :
                                'focus:ring-blue-500 text-blue-600 dark:text-blue-400'
                        }`}
                    aria-label="Close notification"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
        </div>
    );
};

export default Toast;