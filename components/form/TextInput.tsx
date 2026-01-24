import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TextInputProps } from "@/types/form.types";

const TextInput = ({
    icon,
    name,
    label,
    value,
    onChange,
    placeholder,
    multiline = false,
    rows = 4,
    iconAria,
    iconClick,
    required = false,
    type = 'text',
    onBlur,
    ...otherProps
}: TextInputProps & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>)) => {
    const inputId = `input-${name}`;

    // Map icon names to Lucide components
    const getIconComponent = () => {
        if (!icon) return null;
        
        switch (icon) {
            case 'eye':
                return <Eye className="w-5 h-5" aria-hidden="true" />;
            case 'eye-slash':
                return <EyeOff className="w-5 h-5" aria-hidden="true" />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            <label 
                htmlFor={inputId} 
                className='block mb-2 normal-text font-semibold text-slate-900 dark:text-white'
            >
                {label}
                {required && <span className="text-red-500 dark:text-red-400 ml-1" aria-label="required">*</span>}
            </label>

            {!multiline ? (
                <div className="relative w-full">
                    <input
                        type={type}
                        id={inputId}
                        name={name}
                        className={`w-full h-12 ${icon ? 'pr-12' : 'pr-4'} pl-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 normal-text rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300`}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-required={required}
                        aria-invalid={false}
                        {...(otherProps as InputHTMLAttributes<HTMLInputElement>)}
                    />
                    {icon && (
                        <button
                            type="button"
                            className='absolute right-0 top-0 h-12 w-12 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center justify-center transition-colors duration-300'
                            aria-label={iconAria || 'Icon button'}
                            onClick={iconClick}
                            tabIndex={0}
                        >
                            {getIconComponent()}
                        </button>
                    )}
                </div>
            ) : (
                <textarea
                    id={inputId}
                    name={name}
                    className='w-full px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 normal-text rounded-xl resize-none outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transition-all duration-300'
                    placeholder={placeholder}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-required={required}
                    aria-invalid={false}
                    {...(otherProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                ></textarea>
            )}
        </div>
    );
}

export default TextInput;