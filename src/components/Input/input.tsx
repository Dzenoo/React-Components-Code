import { twMerge } from "tailwind-merge";

enum InputTypeAttributes {
  number = "number",
  file = "file",
  text = "text",
  color = "color",
  password = "password",
  date = "date",
}

enum InputHtmlAttributes {
  className = "className",
  ref = "ref",
  type = "type",
}

type InputProps = {
  additionalClasses?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  type?: keyof typeof InputTypeAttributes;
  label?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof typeof InputHtmlAttributes
>;

const Input: React.FC<InputProps> = ({
  additionalClasses,
  inputRef,
  type,
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[0.6em]">
      {label && <label className="font-medium">{label}</label>}
      <input
        type={type}
        ref={inputRef}
        {...props}
        className={twMerge(
          "p-3 rounded-lg leading-6 border disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus:border-hidden",
          additionalClasses
        )}
      />
    </div>
  );
};

export { Input };
