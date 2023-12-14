import { FC, PropsWithChildren, ButtonHTMLAttributes, useState } from "react";
import cn from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "white" | "orange";
  size?: "small" | "medium";
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  variant,
  size = "medium",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-2xl font-semibold shadow-md px-10 py-2 hover:text-secondary",
        {
          "text-white bg-primary": variant === "orange",
          "text-primary bg-white": variant === "white",
          "px-5 py-2 text-sm": size === "small",
        },
        className
      )}
    >
      {children}
    </button>
  );
};
