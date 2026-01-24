"use client";

import { useFormikContext } from 'formik';
import { TextInput, AppErrorMessage } from "@/components";

type StringFieldFormValues = Record<string, string>;

type Props<Values extends StringFieldFormValues = StringFieldFormValues> = {
    name: keyof Values & string;
    label: string;
    multiline?: boolean;
    rows?: number;
    styles?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    required?: boolean;
    placeholder?: string;
    min?: string;
    max?: string;
    isLoading?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'name' | 'label' | 'value' | 'onChange' | 'onBlur'>;

const AppFormField = <Values extends StringFieldFormValues = StringFieldFormValues>({
    name,
    label,
    multiline = false,
    rows = 4,
    styles,
    type = 'text',
    required = false,
    placeholder,
    min,
    max,
    isLoading = false,
    ...props
}: Props<Values>) => {
    const { errors, setFieldTouched, handleChange, touched, values } = useFormikContext<Values>();

    const error = errors[name] as string;
    const isTouched = touched[name] as boolean;
    const value = values[name];

    return (
        <div className={`flex flex-col gap-2 ${styles}`}>
            <TextInput
                type={type}
                name={name}
                label={label}
                multiline={multiline}
                rows={rows}
                onBlur={() => setFieldTouched(name)}
                onChange={handleChange(name)}
                value={value}
                required={required}
                placeholder={placeholder}
                {...props}
            />
            <AppErrorMessage error={error} visible={isTouched} />
        </div>
    );
}

export default AppFormField;