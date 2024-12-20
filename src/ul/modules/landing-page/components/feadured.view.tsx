import { Container } from "@/ul/components/container/container"
import { Typography } from "@/ul/disign-system/typography/typography";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image"
import { Button } from "@/ul/disign-system/button/button";
import { RiArrowRightLine } from "react-icons/ri";
import { ReseauSocialButton } from "@/ul/components/navigation/reseau-social-button";
interface featuredListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;

}
export const FeaturedData: featuredListInterface[] = [
    {

        imagePath: "/assets/svg/diquette.avif",
        imageAlt: "illustration",
        title: "Resources",
        description: "consulte et partage les resources pour des devs",
    },
    {

        imagePath: "/assets/svg/console.jpg",
        imageAlt: "illuminate",
        title: "Entrainement",
        description: "Entrainement toi a devenir meiheur et trouve de l'inspiration",
    },
    {

        imagePath: "/assets/svg/navigation.webp",
        imageAlt: "illustration",
        title: "Visibilite",
        description: "Expose tes projet et cree de l opportunite ",
    },
    {

        imagePath: "/assets/svg/Realistic_DSLR_Camera_Vector.jpg",
        imageAlt: "illustration",
        title: "",
        description: "conncte-toi avec des devs web et booste ta carriere !",
    }
]

export const FeaturedView = () => {
    const featuredList = FeaturedData.map((feature) => {
        return (
            <div key={uuidv4()}
                className="flex flex-col justify-center items-center bg-white p-7 rounded"
            >
                <div className="relative mb-6 p-10 rounded-full w-[130px] h-[130px]">
                    <Image
                        fill
                        src={feature.imagePath}
                        alt={feature.imageAlt}
                        className="blur-2xl rounded-full object-scale-down"
                    />
                    <Image
                        fill
                        src={feature.imagePath}
                        alt={feature.imageAlt}
                        className="rounded-full object-scale-down"
                    />
                </div>
                <Typography variant="lead" weight="medium" component="h3" className="mb-2.5 text-center" >
                    {feature.title}
                </Typography>
                <Typography theme="gray" variant="body-base" component="p" className="text-center" >
                    {feature.description}
                </Typography>
            </div>
        )
    })
    return (

        <div className="bg-gray-200">
            <Container className="gap-24 grid grid-cols-12 py-24">
                <div className="gap-7 grid grid-cols-2 col-span-7">
                    {featuredList}
                </div>
                <div className="flex flex-col justify-between gap-10 col-span-5">
                    <div>
                        <Typography
                            variant="h2"
                            component="h2"
                            className="mb-5"
                        >
                            L endroi le plus cool pour devenir developpeur

                        </Typography>
                        <Typography
                            variant="body-lg"
                            component="p"
                            theme="gray"
                            className="mb-8"
                        >
                           Du partage des connexions et des formations, notre app gere ca pour toi.15
                           Rejoins la communaute et grimpe en grand . Let's go | {""}

                        </Typography>
                        <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
Commencer
                        </Button>
                    </div>
                    <div>
                    <Typography
                            variant="caption3"
                            theme="gray"
                            component="div"
                            className="mb-5"
                        >
                          Nos reseaux sociaux

                        </Typography>
                        <ReseauSocialButton  />
                    </div>
                </div>
            </Container>
        </div>
    )
}