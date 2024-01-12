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
        {label && <label className="font-medium">{label}</label>}
        <input
          {...props}
          type="checkbox"
          ref={ref}
          className={twMerge(
            "w-6 h-6 rounded-md cursor-pointer",
            additionalClasses
          )}
        />
      </div>
    );
  }
);

export { Checkbox };
