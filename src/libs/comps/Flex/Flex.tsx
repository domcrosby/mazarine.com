import clsx from "clsx";

type FlexProps = {
  className?: string;
  children: React.ReactNode;
  column?: boolean;
  full?: boolean;
};

export const Flex = ({
  className = "",
  children,
  column = false,
  full = false,
}: FlexProps) => (
  <div
    className={clsx(
      className,
      "flex",
      column ? "flex-col" : "",
      full ? "min-h-screen" : ""
    )}
  >
    {children}
  </div>
);
