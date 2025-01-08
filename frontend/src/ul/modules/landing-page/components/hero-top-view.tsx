import { Container } from "@/ul/components/container/container"
import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="space-x-5 space-y-3 w-full max-w-2xl">
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
              
                    className="mx-w-xl"

                >
                   Ici on se prend pas la tete , on code comme des bete |
                   rejoins notre tribu de singes des codeurs, partage des projets 
                   les plus fou et des nouveaux amies developpeurs.

                </Typography>

                <div className="space-x-5 p-2.5">
                    <Button baseUrl="">
                      Commencer  
                    </Button>
                    <Button baseUrl="" variant="secondary">
                      En savoir plus {""}
                    </Button>
                </div>
            </div>
            <div>
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