import { Container } from "@/ul/components/container/container"
import { Button } from "@/ul/disign-system/button/button"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const RightLandingListeView = () => {
    return (
        <Container className="space-y-10 py-24">
            <div className="flex justify-center gap-24">
                <div className="relative mt-10 w-[520px] h-[350px]"
                >
                    <Image
                        fill src="/assets/images/cake.svg"
                        alt="illustration"
                        className="rounded-full w-56 h-56 object-cover"
                    />
                </div>
                <div className="space-y-7 max-w-md">

                    <Typography variant="h3" component="h2" className="text-gray-700">
                        De novice a developpeur en un clink d oeil
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Progresse rapidement</ListPoint>
                        <ListPoint>Inscripte-toi</ListPoint>
                        <ListPoint>Gagne de l'assurance</ListPoint>
                    </div>
                    <div className="relative">
                        <Button baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                            Let's go
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center gap-24">
                <div className="relative mt-10 w-[520px] h-[350px]"
                >
                    <Image
                        fill src="/assets/images/top.svg"
                        alt="illustration"
                        className="rounded-full w-56 h-56 object-cover"
                    />
                </div>
                <div className="space-y-7 max-w-md">

                    <Typography variant="h3" component="h2" className="text-gray-700">
                       Booste ta carriere de developpeur
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>Partage t es projet, obtien des feadback</ListPoint>
                        <ListPoint>Connecte-toi elargie tton reseau pro</ListPoint>
                        <ListPoint>Reste inspirer motive avecc notre communaute .</ListPoint>
                    </div>
                    <div className="relative">
                        <Button baseUrl="/#" variant="secondary" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                       Demmarer
                        </Button>
                    </div>
                </div>
            </div>

        </Container >
    )
}

interface Props {
    children: React.ReactNode;
}
const ListPoint = ({ children }: Props) => {
    return (
        <div className="flex items-center gap-2">
            <RiCheckboxCircleLine size={24} className="pt-1 text-secondary" />
            <Typography variant="body-lg" theme="gray" component="span" className="text-gray-500">
                {children}
            </Typography>
        </div>
    )
}