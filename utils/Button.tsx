import React from "react";

interface ButtonInterface {
    label: string
    type?: "button" | "submit" | "reset"
    href?: string
    onClick?: () => any
    className?: string
    color?: "primary" | "secondary" | "accent"
}

export const Button: React.FC<ButtonInterface> = ({ label, onClick, className, color, type }) => {
    return (
        type === "button" ?
            <button
                onClick={onClick}
                className={`md:border border-primary border-[2px] transition-all ease-linear bg-primary hover:bg-transparent  ${color ?? "text-primaryAccent"} text-primaryAccent hover:text-primary rounded-[31.5px] ${className || null}`}
            >
                {label}
            </button> : <button
                onClick={onClick}
                className={`md:py-[19px] md:px-[40px] p-[12px] text-primary text-[19px] leading-[22.99px] tracking-[-0.25px] font-semibold ${className || null}`}
            >
                {label}
            </button>
    )
}
