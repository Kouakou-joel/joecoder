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
        //     role="spinner"
        //     className="w-10 h-10 animate-spin"
        //     xmlns="http://www.w3.org/2000/svg"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //     stroke="currentColor"
        // >
        //     <circle
        //         cx="12"
        //         cy="12"
        //         r="10"
        //         strokeWidth="4"
        //         strokeLinecap="round"
        //     />
        //     <path
        //         className="opacity-75"
        //         fill="currentColor"
        //         d="M15.7071 9.29289C15.3166 8.90238 14.6834 8.90238 14.2929 9.29289L10.7071 12.8787C10.3166 13.2692"
        //     />
        // </svg>
    );
};

    
