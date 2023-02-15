import clsx from "clsx";

interface DesktopOnlyProps {
  className?: string;
  children: React.ReactNode;
}

export const DesktopOnly = ({ className = "", children }: DesktopOnlyProps) => (
  <div className={clsx(className, "hidden")}>{children}</div>
);
