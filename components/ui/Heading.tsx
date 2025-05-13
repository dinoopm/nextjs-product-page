import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const baseClasses = "font-bold mb-1";

const sizeClasses: Record<HeadingLevel, string> = {
  h1: "text-2xl",
  h2: "text-xl",
  h3: "text-lg",
  h4: "text-base",
  h5: "text-sm",
  h6: "text-xs",
};

const Heading = ({
  as = "h1",
  children,
  className = "",
}: HeadingProps): React.JSX.Element => {
  const Tag = `${as}` as keyof React.JSX.IntrinsicElements;
  return (
    <Tag className={`${baseClasses} ${sizeClasses[as]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
