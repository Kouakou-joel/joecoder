import { Container } from "@/ul/components/container/container"

import { Box } from "@/ul/disign-system/box/box"
import { Typography } from "@/ul/disign-system/typography/typography"
import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "./login-form"
import { FormType } from "@/types/form"

interface Props {
    form: FormType;
}
export const LoginView = ({ form }: Props) => {
    return (
        <Container className="gap-20 grid grid-cols-2 mb-32">
            <div>
                <div className="relative w-full h-[531px]">
                    <Image
                        fill
                        src="/assets/images/desktop-anime.jpg"
                        alt="register"
                        className="rounded object-cover"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex justify-between items-center">
                        <Typography variant="h4" component="h1" >
                            Connexion
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption3" component="span" theme="gray" >
                                Tu n'as pas de compte ?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary" >
                                <Link href="/connexion/inscription"> Inscription</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form} />
                    <Typography variant="caption4" component="span" theme="gray" className="flex justify-center" >
                        <Link href="/connexion/mot-de-passe-oublie" className="text-gray"> Mot de passe perdu ?</Link>
                    </Typography>
                </Box>
            </div>
        </Container>
    )
}