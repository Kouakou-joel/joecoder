import { Container } from "@/ul/components/container/container"
import { Box } from "@/ul/disign-system/box/box"
import { Typography } from "@/ul/disign-system/typography/typography"
import Link from "next/link"
import Image from "next/image"
import { ForgetPasswordForm } from "./forget-password-form"
import { FormType } from "@/types/form"


interface Props {
    form: FormType;
}

export const ForgetPasswordView = ({ form }: Props) => {
    if (!form) {
        console.error("Le formulaire est undefined");
        return null;
    }

    return (
        <Container className="gap-20 grid grid-cols-2 mb-32">
            <div>
                <div className="relative w-full h-[531px]">
                    <Image
                        fill
                        src="/assets/images/beautiful-anime-girl.jpg"
                        alt="register"
                        className="rounded object-scale-down"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex justify-between items-center">
                        <Typography variant="h4" component="h1" className="text-xl" >
                           Mot De Passe Oublie
                        </Typography>
                        <div className="flex items-center gap-2">
                        <Typography variant="caption3" component="span" theme="gray" >
                         Tu as deja un compte ?
                        </Typography>
                        <Typography variant="caption4" component="span" theme="primary" >
                         <Link href="/connexion"> Connexion </Link>
                        </Typography>
                        </div>
                    </div>
                    <ForgetPasswordForm form={form} />
                </Box>
            </div>
        </Container>    
    )
}