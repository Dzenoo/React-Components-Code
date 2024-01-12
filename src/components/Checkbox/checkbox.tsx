import React from "react";
import { twMerge } from "tailwind-merge";

enum CheckboxHtmlAttributes {
  className = "className",
  type = "type",
}

type CheckboxProps = {
  additionalClasses?: string;
  label?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof typeof CheckboxHtmlAttributes
>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ additionalClasses, label, ...props }, ref) => {
    return (
      <div className="flex gap-3 items-center">
        <input
          {...props}
          type="checkbox"
          ref={ref}
          className={twMerge(
            "w-6 h-6 rounded-md cursor-pointer transition-colors border-gray-400 hover:border-gray-600",
            additionalClasses
          )}
        />
        {label && <label className="font-medium text-gray-900">{label}</label>}
      </div>
    );
  }
);

export { Checkbox };
