import React from "react";
import { twMerge } from "tailwind-merge";

type OptionsProps = {
  label: string;
  value: string | number;
};

enum SelectHtmlAttributes {
  className = "className",
}

type SelectProps = {
  additionalClasses?: string;
  options: OptionsProps[];
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  keyof typeof SelectHtmlAttributes
>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ additionalClasses, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={twMerge(
          "p-3 rounded-lg border cursor-pointer overflow-auto min-w-40 focus:outline-none transition-colors hover:border-gray-400 focus:border-gray-400",
          additionalClasses
        )}
      >
        {options.map((option: OptionsProps) => (
          <option
            key={option.label}
            value={option.value}
            className="shadow-none rounded-none"
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export { Select };
