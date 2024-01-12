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

const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

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
