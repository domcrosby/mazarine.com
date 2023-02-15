import { SelectHTMLAttributes, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Generic {
  label?: string;
  className?: string;
}

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

type LabelProps = {
  id?: string;
  children: React.ReactNode;
};

const Label = ({ id, children }: LabelProps) => (
  <label htmlFor={id} className="mb-3 block text-sm font-medium text-gray-700">
    {children}
  </label>
);

interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    Generic {}

export const SelectField = ({
  id,
  label,
  className = "",
  ...props
}: SelectFieldProps) => (
  <div className={className}>
    {label && <Label id={id}>{label}</Label>}
    <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
  </div>
);

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Generic {}

export const TextField = ({
  id,
  label,
  type = "text",
  className = "",
  ...props
}: TextFieldProps) => (
  <div className={className}>
    {label && <Label id={id}>{label}</Label>}
    <input id={id} type={type} {...props} className={formClasses} />
  </div>
);
