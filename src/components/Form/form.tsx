import React from "react";
import { twMerge } from "tailwind-merge";

type FormProps<
  T extends React.FormHTMLAttributes<HTMLFormElement> = React.FormHTMLAttributes<HTMLFormElement>
> = {
  children: React.ReactNode;
} & Omit<T, "children">;

const Form = React.forwardRef<
  HTMLFormElement,
  FormProps<React.FormHTMLAttributes<HTMLFormElement>>
>(({ className, children, ...props }, ref) => {
  return (
    <form ref={ref} {...props} className={twMerge("px-3", className)}>
      {children}
    </form>
  );
});

type FormItemProps<
  T extends React.HTMLAttributes<HTMLDivElement> = React.HTMLAttributes<HTMLDivElement>
> = {
  children: React.ReactNode;
} & Omit<T, "children">;

const FormItem = React.forwardRef<
  HTMLDivElement,
  FormItemProps<React.HTMLAttributes<HTMLDivElement>>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge("py-3 flex flex-col gap-3", className)}
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
  variant?: keyof typeof FormInfoVariants;
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, "children">;

const FormInfo = React.forwardRef<HTMLParagraphElement, FormInfoProps>(
  ({ children, variant = "default", className, ...props }, ref) => {
    return (
      <div>
        <p
          ref={ref}
          {...props}
          className={twMerge(
            "text-[16px] font-light leading-3",
            className,
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
