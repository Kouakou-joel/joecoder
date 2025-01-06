import { Container } from "@/ul/components/container/container"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"
export const CurrentCoursesView = () => {
    return (
        <div className="bg-gray-200">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5">
                    Formation react.js gratuite
                </Typography>
                <Typography variant="lead" component="h3" className="mb-2.5">
                    Formation react.js gratuite
                </Typography>
                <Typography variant="caption3" theme="gray" component="p" className="mb-2.5 pb-3">
                    Si tu veux un cv plus sexy que ton ex , sur cette formation complete !
                </Typography>
                <a href="/#" target="_blank" >
                    <div className="relative bg-gray-300 rounded h-[600px]">
                    <div className="relative z-10 flex flex-col justify-center items-center bg-gray opacity-0 hover:opacity-95 rounded h-full animate">
                    <RiPlayCircleLine size={40}/>
                    <Typography
                        variant="caption2"
                      
                        theme="white"
                        className="uppercase"
                        weight="medium"
                    >
                        lire l'information
                    </Typography>
                </div>
                        <Image
                            fill
                            src="/assets/images/maxresdefault.jpg"
                            alt="illustration-formation-react"
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                </a>
            </Container>
        </div>
    )
} 