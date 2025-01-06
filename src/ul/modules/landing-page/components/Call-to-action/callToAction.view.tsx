import { LinkTypes } from "@/lib/link-types"
import { Container } from "@/ul/components/container/container"
import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
export const CallToActionView = () => {
    return (
        <div className="relative bg-primary overflow-hidden">
            <Container className="py-20">

                <div className="relative z-10 space-y-5 max-w-3xl">

                    <Typography variant="h2" theme="white" component="h2" className="">
                        Fais ton apprentissage en ligne avec Joe Coder
                    </Typography>
                    <div>

                        <Button baseUrl="/#"
                            variant="success"
                            linkType={LinkTypes.EXTERNAL}
                        >
                            Formation react.js gratuite
                        </Button>
                    </div>
                </div>
                <div className="relative z-10">
                    <Image 
                
                    src="/assets/images/rocket.jpg"
                     alt="illustration" 
                     width={320}
                     height={320}
                     className="-right-0 -bottom-[60px] absolute"
                     />
                </div>
            </Container>
        </div>
    )
}