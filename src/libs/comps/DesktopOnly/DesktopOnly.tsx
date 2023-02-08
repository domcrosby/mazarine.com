import { classNames } from "../../classNames/classNames";

interface DesktopOnlyProps {
  className?: string;
  children: React.ReactNode;
}

export const DesktopOnly = ({ className = "", children }: DesktopOnlyProps) => (
  <div className={classNames(className, "hidden")}>{children}</div>
);
