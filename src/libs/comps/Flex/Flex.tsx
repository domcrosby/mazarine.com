import { classNames } from "../../classNames/classNames";

interface FlexProps {
  className?: string;
  children: React.ReactNode;
}

export const Flex = ({ className = "", children }: FlexProps) => (
  <div className={classNames(className, "flex")}>{children}</div>
);
