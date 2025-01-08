import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}
export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
    let variantStyle: string, sizeStyle: string;


    switch (size) {
        case "small":
            sizeStyle = "w-5 h-5";
            break;
        case "medium":
            sizeStyle = "w-9 h-9";
            break;
        case "large":
            sizeStyle = "w-12 h-12";
            break;
    }
    switch (variant) {
        case "primary":
            variantStyle = "text-primary";
            break;
        case "white":
            variantStyle = "text-white";
            break;

    }
    return (
        <CgSpinner className={clsx(
            sizeStyle, variantStyle, "animate-spin"
        )} />
       
    );
};

    
