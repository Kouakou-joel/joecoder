import clsx from "clsx";
import Image from "next/image";
interface props {
    size?: "small" | "medium" | "large";
    src: string;
    alt: string;
}
export const Avatar = ({ size = "medium", src, alt }: props) => {
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

    }
    return (
        <div className={clsx(SizeStyle, "bg-gray-400 rounded-full relative")}>
          <Image
          fill
           src={src}
             alt={alt }
     
           className="object-left-top rounded-full object-cover"
         
          />
        </div>
        
    );
}