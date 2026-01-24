import * as Yup from 'yup';
import { InferType } from 'yup';
import { passwordValidation } from '@/utils/validationUtils';

// Login validation schema
export const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .label("Email"),
    password: passwordValidation(),
});
export type LoginFormValues = InferType<typeof LoginValidationSchema>;

// Signup validation schema
export const SignupValidationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must not exceed 50 characters")
        .label("First Name"),
    last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must not exceed 50 characters")
        .label("Last Name"),
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .label("Email"),
    password: passwordValidation(),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match")
        .label("Confirm Password"),
});
export type SignupFormValues = InferType<typeof SignupValidationSchema>;