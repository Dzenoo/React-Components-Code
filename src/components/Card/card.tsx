import React from "react";
import { twMerge } from "tailwind-merge";

enum CardHtmlAttributes {
  className = "className",
  children = "children",
}

type CardProps = {
  children: React.ReactNode;
  additionalClasses?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, keyof typeof CardHtmlAttributes>;

type CardHeaderProps = {
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

type CardContentProps = {
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

type CardFooterProps = {
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, additionalClasses = "", ...props }, ref) => {
    return (
      <div
        {...props}
        className={twMerge(
          "rounded-md p-3 shadow-md bg-white overflow-auto flex flex-col gap-3",
          additionalClasses
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export { Card, CardContent, CardHeader, CardFooter };
