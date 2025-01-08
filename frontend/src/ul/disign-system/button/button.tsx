import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-types";
import Link from "next/link";

interface props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico"| "success"| "danger";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string,
    linkType?: LinkType,
    action?: Function,
    type? : "button" | "submit" | "reset" ;
    fullwidth?: boolean,

}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => { },
    type = "button",
    fullwidth,
}: props) => {
    let variantStyles: string = "",
        sizeStyles: string = "",
        icoSize: number = 0;

    //switch pour les variants

    switch (variant) {
        case "accent":
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 text-gray-600 border border-gray-500 text-gray-600 rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
            case "success":
                variantStyles = "bg-secondary hover:bg-secondary-300/50 text-white rounded";
                break;
                case "danger":
                variantStyles = "bg-alerts-danger hover:bg-alerts-danger/50 text-white rounded";
                break;
        case "ico":
            if (iconTheme === "accent") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            
            if (iconTheme === "gray") {
                variantStyles = "bg-gray hover:bg-gray-500 text-white rounded-full";
            }
            break;
    }
    //switch pour les tailles 

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium 
            ${variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[12px] py-[10px]"
                } `;
            icoSize = 18;
            break;

        case "medium":
            sizeStyles = `text-caption2 font-medium ${variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[12px] py-[10px]"
                }`;
            icoSize = 20;
            break;

        case "large":
            sizeStyles = `text-caption1 font-medium ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[12px] py-[10px]"
                }`;
            icoSize = 24;
            break;

    }
    const handleClick = () => {
        if (action) {
            action();
        }
    };
    const buttonContent = (
         <>
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    {variant === "accent" || variant === "ico" ?
                        (<Spinner size="small" variant="white" />
                        ) :
                        (<Spinner size="small" />)}

                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "ico" ? (
                    <icon.icon size={icoSize} />
                ) : <div className={icon && "flex items-center gap-1"}>
                    {icon && iconPosition === "left" && (
                        <icon.icon size={icoSize} />
                    )}
                    {children}
                    {icon && iconPosition === "right" && (
                        <icon.icon size={icoSize} />
                    )}
                </div>}

            </div>
        </>
    )
    const buttonElement = (
        <button 
        type={type}
            className={clsx(
                variantStyles,
                sizeStyles,
                isLoading && "cursor-wait",
                fullwidth && "w-full",
                
                "relative animate"

            )}
            onClick={handleClick}

            disabled={disabled || isLoading ? true : false}
        >
            {buttonContent}
        </button>
    )
    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return <a href={baseUrl} target="_blank">{buttonElement}</a>;
        } else {
            return <Link href={baseUrl}>{buttonElement}</Link>;
        }
    }
    return buttonElement;
}; 