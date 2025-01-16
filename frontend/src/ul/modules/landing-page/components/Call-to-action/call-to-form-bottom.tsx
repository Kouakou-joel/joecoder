import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"

export const CallToFormBottom = ()=>{
    return(
        <div className="relative flex flex-col justify-center items-center gap-8 bg-secondary-400 px-8 py-12 pb-44 rounded h-80 overflow-hidden">
            <Typography
            variant="lead"
            weight="medium"
   
            theme="white"
            className="text-center"
            >
             Rejoins-nous sur le groupe 
            </Typography>
            <div>
                <Button
                baseUrl="http://youtube.com"
                variant="accent"
                linkType="external"
                

                 >
                    profite 😎
                </Button>
                <Image
                src="/assets/images/cake.svg"
                 alt="illustration" 
                 width={240}
                 height={240} 
                 className="-bottom-4 left-1/2 absolute transform -translate-x-1/2"
                />
            </div>
        </div>
    )
}