import { twMerge } from "tailwind-merge";

type CardProps = {
  children: React.ReactNode;
  additionalClasses?: string;
  cardRef?: React.RefObject<HTMLDivElement>;
} & Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children" | "className" | "ref"
>;

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

const Card: React.FC<CardProps> = ({
  children,
  additionalClasses = "",
  cardRef,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        "rounded-md p-3 shadow-md bg-white overflow-auto flex flex-col gap-3",
        additionalClasses
      )}
      ref={cardRef}
    >
      {children}
    </div>
  );
};

export { Card, CardContent, CardHeader, CardFooter };
