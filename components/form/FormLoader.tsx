interface FormLoaderProps {
    visible: boolean;
    message?: string;
}

const FormLoader = ({ visible, message = "Processing..." }: FormLoaderProps) => {
    if (!visible) return null;

    return (
        <div 
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="loading-message"
        >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl max-w-sm mx-4 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col items-center gap-6">
                    {/* Emerald Wave Animation */}
                    <div className="relative w-20 h-20">
                        {/* Outer wave ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-emerald-200 dark:border-emerald-800 animate-ping"></div>
                        
                        {/* Rotating gradient ring */}
                        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-emerald-600 dark:border-t-emerald-400 animate-spin"></div>
                        
                        {/* Inner pulsing core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></div>
                        </div>
                        
                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                        </div>
                        
                        {/* Counter-rotating dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-300"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-300"></div>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <div className="text-center space-y-2">
                        <p 
                            id="loading-message"
                            className="big-text-5 font-bold text-slate-900 dark:text-white"
                        >
                            {message}
                        </p>
                        <p className="small-text text-slate-600 dark:text-slate-400">
                            Please wait a moment
                        </p>
                    </div>

                    {/* Animated Progress Dots */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLoader;