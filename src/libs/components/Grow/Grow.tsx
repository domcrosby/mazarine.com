import clsx from "clsx";

type FlexProps = {
  className?: string;
  children: React.ReactNode;
};

export const Grow = ({ className = "", children }: FlexProps) => (
  <div className={clsx(className, "flex-grow")}>{children}</div>
);
