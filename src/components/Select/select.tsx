import React from "react";
import { twMerge } from "tailwind-merge";

enum LabelVariants {
  default = "text-gray-900",
  danger = "text-red-400",
  warning = "text-yellow-400",
}

enum SelectVariants {
  default = "border-gray-300 hover:border-gray-400 focus:border-gray-400",
  danger = "border-red-400 hover:border-red-600 text-red-700 focus:border-red-600",
  warning = "border-yellow-400 hover:border-yellow-600 text-yellow-700 focus:border-yellow-600",
}

type OptionProps = {
  label: string;
  value: string | number;
};

enum SelectHtmlAttributes {
  className = "className",
}

type SelectProps = {
  additionalClasses?: string;
  options: OptionProps[];
  label?: string;
  variant?: keyof typeof SelectVariants;
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  keyof typeof SelectHtmlAttributes
>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { additionalClasses, options, label, variant = "default", ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-[0.6em]">
        {label && (
          <label className={twMerge("font-medium", LabelVariants[variant])}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          {...props}
          className={twMerge(
            "p-3 rounded-lg border cursor-pointer overflow-auto min-w-40 focus:outline-none text-gray-900 font-light leading-6 transition-colors",
            "hover:border-gray-400 focus:border-gray-400",
            additionalClasses,
            SelectVariants[variant]
          )}
        >
          {options.map((option: OptionProps) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export { Select };
