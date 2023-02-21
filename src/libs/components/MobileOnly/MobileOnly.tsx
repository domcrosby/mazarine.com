import clsx from "clsx";

interface MobileOnlyProps {
  className?: string;
  children: React.ReactNode;
}

export const MobileOnly = ({ className = "", children }: MobileOnlyProps) => (
  <div className={clsx(className, "sm:hidden")}>{children}</div>
);
