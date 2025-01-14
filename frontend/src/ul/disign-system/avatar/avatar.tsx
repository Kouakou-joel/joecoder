import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";
interface props {
    size?: "small" | "medium" | "large"| "extra-large";
    src: string;
    alt: string;
    isLoading?: boolean;
}
export const Avatar = ({ size = "medium", src, alt ,isLoading}: props) => {
    let SizeStyle: string;

    switch (size) {
       
        case "small":
            SizeStyle = "w-[24px] h-[24px]";
            break;
        case "medium":
            SizeStyle = "w-[34px] h-[34px]";
            break;
        case "large":
            SizeStyle = "w-[50px] h-[50px]";
            break;
            case "extra-large":
            SizeStyle = "w-[130px] h-[130px]";
            break;

    }
    return (
        <div
         className={clsx(
            SizeStyle,
            isLoading && " flex items-center justify-center",
             "bg-gray-400 rounded-full relative overflow-hidden")}
             >
                <div className={clsx(
            SizeStyle,
            isLoading? "opacity-40" : "opacity-0",
             "absolute animate z-10 h-full w-full bg-white")}  />
          <Image
          fill
           src={src ? src :"/assets/images/avatarnav.jpg"}
             alt={alt }
     
           className={clsx(
            isLoading && "blu-[2px]",
            "object-center rounded-full object-cover animate")}
         
          />
          {isLoading && <Spinner
          className="relative z-20" />}
        </div>
        
    );
}