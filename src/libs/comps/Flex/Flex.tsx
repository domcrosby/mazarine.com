import clsx from "clsx";

type FlexProps = {
  className?: string;
  children: React.ReactNode;
};

export const Flex = ({ className = "", children }: FlexProps) => (
  <div className={clsx(className, "flex")}>{children}</div>
);
