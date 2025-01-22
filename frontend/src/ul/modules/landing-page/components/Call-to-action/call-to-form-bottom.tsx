import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"

export const CallToFormBottom = ()=>{
    return(
        <div className="relative flex flex-col justify-center items-center gap-8 bg-secondary-400 max-sm:mx-24 max-lg:mx-24 max-xl:mx-16 px-8 py-12 pb-44 rounded max-sm:w-max max-lg:w-max max-xl:w-max h-80 overflow-hidden">
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