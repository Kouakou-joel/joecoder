import { Container } from "@/ul/components/container/container"
import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
export const HeroTopView = () => {
    return (
        <Container className="relative mt-4 max-sm:px-36 max-lg:px-36 max-xl:px-32 py-4 pt-40 max-sm:pt-14 pb-52 max-sm:pb-10 max-sm:w-max max-lg:w-max overflow-hidden">
            <div className="max-lg:flex max-sm:flex-col max-lg:flex-col space-x-5 space-y-3 max-sm:pr-96 max-lg:pr-96 max-xl:pr-80 w-full max-w-7xl">
                <Typography
                    variant="h1"
                  component="h1"
               
                    className="max-w-lg"

                >
                    Rejoins les singes codeurs
                </Typography>
                <Typography
                    variant="body-lg"
                    theme="gray"
                    component="p"
              
                    className="max-w-xl"

                >
                   Ici on se prend pas la tete , on code comme des bete |
                   rejoins notre tribu de singes des codeurs, partage des projets 
                   les plus fou et des nouveaux amies developpeurs.

                </Typography>

                <div className="max-sm:flex space-x-5 max-sm:space-x-4 p-2.5 max-sm:p-1">
                    <Button baseUrl="">
                      Commencer  
                    </Button>
                    <Button baseUrl="" variant="secondary">
                      En savoir plus {""}
                    </Button>
                </div>
            </div>
            <div className="">
                <Image
                    src="/assets/images/anime hero.jpg"
                    alt="anime inspiration"
                    priority

                    width={500}
                    height={400}
                    className="top-0 right-0 z-0 absolute"
                />
            </div>
        </Container>
    )
}