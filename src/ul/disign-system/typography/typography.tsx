import clsx from "clsx";
import React, { Component } from "react";

interface props {
    variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "head"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
    component?: "h1"| "h2"| "h3"| "h4"| "h5"| "div"| "p"| "span";
    children: React.ReactNode
}

export const Typography = ({ variant="h3", component: Component="div", children }: props) => {
    let variantStyles:string = "";

    switch (variant) {
        case "display":
        variantStyles = "text-red-500"
        break;
        case "h1":
        variantStyles = "text-green-500"
        break;
    }
    return (
        <Component className={clsx(variantStyles)}  >{children}</Component>
    );
}