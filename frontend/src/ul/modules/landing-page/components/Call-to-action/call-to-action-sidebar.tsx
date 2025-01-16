import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"

export const CallToActionSidebarComponent = ()=>{
    return(
        <div className="relative flex flex-col justify-center items-center gap-8 bg-primary px-8 py-12 pb-44 rounded h-80 overflow-hidden">
            <Typography
            variant="lead"
            weight="medium"
   
            theme="white"
            className="text-center"
            >
               Recompense mes efforts 
            </Typography>
            <div>
                <Button
                baseUrl="http://google.com"
                variant="secondary"
                linkType="external"

                 >
                    Découvrir
                </Button>
                <Image
                src="/assets/images/top.svg"
                 alt="illustration" 
                 width={200}
                 height={200} 
                 className="-bottom-2 left-1/2 absolute transform -translate-x-1/2"
                />
            </div>
        </div>
    )
}