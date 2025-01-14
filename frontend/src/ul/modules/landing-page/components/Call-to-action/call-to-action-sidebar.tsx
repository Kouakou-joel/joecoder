import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"

export const CallToActionSidebarComponent = ()=>{
    return(
        <div className="relative flex flex-col justify-center items-center gap-5 bg-primary px-8 py-12 pb-44 rounded h-24 overflow-hidden">
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
                variant="success"
                linkType="external"

                 >
                    Découvrir
                </Button>
                <Image
                src="/assets/images/rocket.jpg"
                 alt="illustration" 
                 width={120}
                 height={120} 
                 className="-bottom-7 left-1/2 absolute transform translate-x-1/2"
                />
            </div>
        </div>
    )
}