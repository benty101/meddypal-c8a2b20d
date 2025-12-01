import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface FutureButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    glow?: boolean;
    children?: React.ReactNode;
}

const FutureButton = React.forwardRef<HTMLButtonElement, FutureButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, glow = true, children, ...props }, ref) => {

        const baseStyles = "relative inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-[#0066FF] text-white hover:bg-[#0052cc]",
            secondary: "bg-[#00D2FF] text-white hover:bg-[#00b8e6]",
            ghost: "bg-transparent text-[#0F172A] hover:bg-slate-100",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const glowStyles = glow && variant === "primary"
            ? "shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
            : "";

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], glowStyles, className)}
                disabled={isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);

FutureButton.displayName = "FutureButton";

export { FutureButton };
