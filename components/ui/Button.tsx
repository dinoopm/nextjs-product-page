import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const baseClasses =
  "block w-full text-center font-semibold transition focus:outline-none disabled:cursor-not-allowed";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => (
    <button ref={ref} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
