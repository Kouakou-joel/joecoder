import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { Input } from "@/ul/disign-system/forms/input";
import { Texteara } from "@/ul/disign-system/forms/textaera";
import { Button } from "@/ul/disign-system/button/button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

interface ContactFormFields {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage(){
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormFields>();

    const onSubmit = async (data: ContactFormFields) => {

        // Ici, vous pouvez gérer l'envoi du formulaire, par exemple en utilisant une API
        console.log(data);
        toast.success("Votre message a été envoyé avec succès !");
        router.push("/mon-espace")
      
    };

    return (
        <div>
           
        <Container className="py-20">
            <Typography variant="h2" component="h1" className="mb-8 text-center">
                Contactez-nous
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-auto max-w-md">
                <Input
                    type="text"
                    label="Nom"
                    placeholder="Votre nom"
                    register={register}
                    errors={errors}
                    id="name"
                    errorrMsg="Ce champ est requis"
                />
                <Input
                    type="email"
                    label="Email"
                    placeholder="Votre email"
                    register={register}
                    errors={errors}
                    id="email"
                    errorrMsg="Veuillez entrer un email valide"
                />
                <Texteara
                    rows={5}
                    label="Message"
                    placeholder="Votre message"
                    register={register}
                    errors={errors}
                    id="message"
                    errorrMsg="Ce champ est requis"
                />
                <div className="flex justify-between">
                <Button type="submit" variant="accent">
                    Envoyer
                </Button>
               <Link
                href="/#"
                className="text-gray"
 
               >
                 <Button 
                 variant="secondary"
                
                 >
                    Retour
                </Button>
               </Link>
                </div>
            </form>
        </Container>
        </div>
    );
};


