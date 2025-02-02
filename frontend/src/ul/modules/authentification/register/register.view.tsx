import { Container } from "@/ul/components/container/container"
import { Box } from "@/ul/disign-system/box/box"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
import Link from "next/link"
import { RegisterForm } from "./register-form"
import { FormType } from "@/types/form"

interface Props {
    form: FormType;
}
export const RegisterView = ({form}: Props) => {

    return (
        <Container className="gap-20 grid grid-cols-2 max-sm:mx-24 max-md:mx-24 max-lg:mx-16 max-xl:mx-16 mb-32 max-sm:px-10 max-sm:w-max max-md:w-max max-lg:w-max max-xl:w-max">
            <div>
                <div className="relative w-full h-[531px]">
                    <Image
                        fill
                        src="/assets/images/forccett.jpg"
                        alt="register"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex justify-between items-center max-sm:space-x-4 max-lg:space-x-6 max-xl:space-x-6">
                        <Typography variant="h4" component="h1" >
                            Inscription
                        </Typography>
                        <div className="flex items-center gap-2">
                        <Typography variant="caption3" component="span" theme="gray" >
                         Tu as deja un compte ?
                        </Typography>
                        <Typography variant="caption4" component="span" theme="primary" >
                         <Link href="/connexion"> Connexion</Link>
                        </Typography>
                        </div>
                    </div>
                    <RegisterForm form={form} />
                  
                        <Typography variant="caption4" component="span" theme="gray" className="space-y-1 mx-auto max-w-md text-center" >
                            <div>En t inscrivant tu acceptes les  </div>
                            <div>
                            <Link href="/#" className="text-gray"> conditions d utilisation</Link>
                            {" "}  et {" "}
                            <Link href="/#" className="text-gray">politique de confidentialité</Link>
                            </div>
                        
                        </Typography>
                </Box>
            </div>
        </Container>
    )
}