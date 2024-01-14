import React from "react";
import { twMerge } from "tailwind-merge";

enum FormAttributes {
  className = "className",
  children = "children",
}

type FormProps<
  T extends
    | React.FormHTMLAttributes<HTMLFormElement>
    | React.HTMLAttributes<HTMLDivElement>
> = {
  children: React.ReactNode;
  additionalClasses?: string;
} & Omit<T, keyof typeof FormAttributes>;

const Form = React.forwardRef<
  HTMLFormElement,
  FormProps<React.FormHTMLAttributes<HTMLFormElement>>
>(({ children, additionalClasses, ...props }, ref) => {
  return (
    <form ref={ref} {...props} className={twMerge("px-3", additionalClasses)}>
      {children}
    </form>
  );
});

const FormItem = React.forwardRef<
  HTMLDivElement,
  FormProps<React.HTMLAttributes<HTMLDivElement>>
>(({ children, additionalClasses, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge("py-3 flex flex-col gap-3", additionalClasses)}
    >
      {children}
    </div>
  );
});

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
