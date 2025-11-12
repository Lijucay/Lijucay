import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button( { children, href, className }: { children: React.ReactNode; href?: string, className: string; }) {
    return (
        <a
            href={href}
            className={
                clsx(
                    `flex flex-row rounded-full py-2 px-4 w-fit`,
                    className
                )
            }
        >
            {children}
        </a>
    )
}