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
  additionalClasses?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "ref"
>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  additionalClasses = "",
  buttonRef,
  ...props
}) => {
  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={twMerge(
        "p-3 rounded-lg font-medium text-white leading-6 disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
        additionalClasses,
        ButtonVariants[variant]
      )}
    >
      {children}
    </button>
  );
};

export { Button };
