import { Typography } from "@/ul/disign-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks,  } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-types";
import { ReseauSocialButton } from "./reseau-social-button";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerLinks.map((columnLinks) => (
        <FooterLink key={uuidv4()} data={{ 
            label: columnLinks.label,
            links: columnLinks.data 
        }} />
    ));
    return (
        <div className="bg-gray-700 py-18">
            <Container className="flex justify-between py-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"

                    >
                        Fomation gratuites
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"

                    >
                        Abonne-toi a la chaine
                    </Typography>
                    <a href="https://youtube.com/@JojoMignon-d5n" target="_blank">
                        <Image
                            src="/assets/svg/icons8-youtube-94.png"
                            width={140}
                            height={80}
                            alt="Jojo Mignon" />
                    </a>
                </div>
                <div className="flex gap-4">
                    {footerNavigationList}
                </div>
            </Container >
            <Container className="py-4">
                <hr className="text-gray-700" />
                <div className="flex justify-between items-center gap-1">
                    <Typography theme="gray" variant="caption4">
                        {` © 2024 Joe Coder. ${currentYear} | promote `}
                        <a href="/"
                            target="_blank" className="underline">jojomignon5612@gmail.com</a>
                        {` Tous droits réservés.`}
                    </Typography>
        <ReseauSocialButton theme="gray" />
                </div>
            </Container>
        </div>
    )
}
export default Footer;

interface footerLinksProps {
    data: FooterLinks;
}
const FooterLink = ({ data }: footerLinksProps) => {
    const LinkList = data.links.map((link) => (
        <div key={uuidv4()}>{link.type === LinkTypes.INTERNAL && (
            <ActiveLink href={link.baseUrl}>
                {link.label}
            </ActiveLink>
        )}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">
                    {link.label}
                </a>
            )}
        </div>
    ));
    return (
        <div className="min-w-[190px]">
            <Typography
                variant="caption2"
                theme="white"
                weight="medium"
                className="gap-2 pb-5"
            >
                {data.label}
            </Typography>
            <Typography
                variant="caption3"
                theme="gray"
                className="space-y-4"

            >
                {LinkList}

            </Typography>
        </div>
    )
}