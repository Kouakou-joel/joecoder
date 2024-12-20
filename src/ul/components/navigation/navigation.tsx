import { Typography } from "@/ul/disign-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ul/disign-system/logo/logo";
import { Button } from "@/ul/disign-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

interface props { }

export const Navigation = ({ }: props) => {
    return (
        <div className="border-gray-400 border-b-2">
            <Container className="flex justify-between items-center gap-7 py-1.5">
                <Link href="/">
                <div className="flex items-center gap-2.5">
                    <Logo size="small" />
                    <div className="flex flex-col">
                        <div className="font-extrabold text-[24px] text-gray-700">
                            Joe Coder
                        </div>
                        <Typography theme="gray" variant="caption4" component="div" >
                            Trouve de l inspiration & recois  des freedbacks !
                        </Typography>
                    </div>
                </div>
                </Link>
                <div className="flex gap-4">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7" >
                        <ActiveLink href="/disign-system"> Disign system</ActiveLink>
                        <ActiveLink href="/projects"> Project</ActiveLink>
                        <ActiveLink href="/formation"> Formation</ActiveLink>
                        <ActiveLink href="/conctat"> Contact</ActiveLink>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small" >Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

