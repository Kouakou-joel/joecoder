import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"

export const CallToFormBottom = ()=>{
    return(
        <div className="relative flex flex-col justify-center items-center gap-5 bg-secondary-400 px-8 py-12 pb-44 rounded h-24 overflow-hidden">
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
                src="/assets/images/slack.avif"
                 alt="illustration" 
                 width={120}
                 height={120} 
                 className="-bottom-7 left-1/2 absolute transform translate-x-1/2"
                />
            </div>
        </div>
    )
}