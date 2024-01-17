import React from "react";
import { twMerge } from "tailwind-merge";

enum ButtonVariants {
  default = "bg-indigo-700 hover:bg-indigo-900",
  warning = "bg-yellow-400 hover:bg-yellow-600",
  danger = "bg-red-600 hover:bg-red-800",
  success = "bg-green-600 hover:bg-green-800",
  outlined = "bg-none border border-gray-300 text-black hover:bg-[#ebebeb]",
  info = "bg-blue-700 hover:bg-blue-800",
}

type ButtonProps = {
  children: React.ReactNode;
  variant: keyof typeof ButtonVariants;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={twMerge(
          "p-3 rounded-lg font-medium text-white leading-6 disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
          className,
          ButtonVariants[variant]
        )}
      >
        {children}
      </button>
    );
  }
);

export { Button };
