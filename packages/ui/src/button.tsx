import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <button
                className={cn("px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600", className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
