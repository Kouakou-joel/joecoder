import { Button } from "@/ul/disign-system/button/button";
import { footerSocialLinks } from "./app-links";
import {v4 as uuidv4 } from "uuid";
import { RiFacebookBoxFill } from "react-icons/ri";
interface props {
    theme?:"accent" | "secondary" | "gray" ;
className?: string;
}
export const ReseauSocialButton = ({className, theme= "accent"}: props) =>{
    const icoList = footerSocialLinks.map((socialReeseau) => {
        return (
            <Button
                key={uuidv4()}
                variant="ico"
                iconTheme={theme}
             
                icon={{ 
                    icon: socialReeseau.icon ? socialReeseau.icon : RiFacebookBoxFill

                 }}
                 baseUrl={socialReeseau.baseUrl}
                 linkType={socialReeseau.type}
               
            >
            </Button>
        );
    });
    return (
        <div className={`flex gap-2 ${className}`}>
            {icoList} 
        </div>
    )
}