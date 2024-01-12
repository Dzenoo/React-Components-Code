import React from "react";
import { twMerge } from "tailwind-merge";

enum FormAttributes {
  className = "className",
  children = "children",
}

type FormProps = {
  children: React.ReactNode;
  additionalClasses?: string;
} & Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  keyof typeof FormAttributes
>;

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, additionalClasses, ...props }, ref) => {
    return (
      <form ref={ref} {...props} className={twMerge("px-3", additionalClasses)}>
        {children}
      </form>
    );
  }
);

type FormItemProps = {
  children: React.ReactNode;
  additionalClasses?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, keyof typeof FormAttributes>;

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ children, additionalClasses, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={twMerge("py-3 flex flex-col gap-3", additionalClasses)}
      >
        {children}
      </div>
    );
  }
);

enum FormInfoVariants {
  default = "text-gray-900",
  danger = "text-red-400",
  warning = "text-yellow-400",
}

type FormInfoProps = {
  children: React.ReactNode;
  additionalClasses?: string;
  variant?: keyof typeof FormInfoVariants;
} & Omit<
  React.HTMLAttributes<HTMLParagraphElement>,
  keyof typeof FormAttributes
>;

const FormInfo = React.forwardRef<HTMLParagraphElement, FormInfoProps>(
  ({ children, additionalClasses, variant = "default", ...props }, ref) => {
    return (
      <div>
        <p
          ref={ref}
          {...props}
          className={twMerge(
            "text-[16px] font-light leading-3",
            additionalClasses,
            FormInfoVariants[variant]
          )}
        >
          {children}
        </p>
      </div>
    );
  }
);

export { Form, FormItem, FormInfo };
