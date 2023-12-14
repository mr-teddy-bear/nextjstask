import React, { InputHTMLAttributes, forwardRef } from "react";
import cn from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, error, className, type = "text", style, ...props }, ref) => {
    return (
      <div className={cn("", className)} style={style}>
        <label>
          <span className="mb-1 block">{placeholder}</span>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className={cn(
              "px-4 py-2 w-full outline-none border border-gray border-solid  focus:border-primary transition-all placeholder:text-gray rounded-lg",
              {
                "border-red": !!error,
              }
            )}
          />
          {error && <div className="text-red mt-1 text-sm">{error}</div>}
        </label>
      </div>
    );
  }
);

TextField.displayName = "TextField";
