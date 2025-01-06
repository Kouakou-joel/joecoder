import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

import { ForgetPasswordView } from "./forget-password.view"
import { FogetPasswordFormFielsType } from "@/types/form";
import { toast } from "react-toastify";
import { sendEmailToResetPasswod } from "@/api/authentification";
import { useRouter } from "next/router";


export const ForgetPasswordContainer = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<FogetPasswordFormFielsType>();
    const handleSendPasswordResetEmail = async ({ 
        email ,    
    }: FogetPasswordFormFielsType) => {
        const { error } = await sendEmailToResetPasswod(email);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;

        } 
            toast.info("Veuillez vérifier votre boîte mail pour réinitialiser votre mot de passe.");
            setIsLoading(false);
            toast.success(`Email de réinitialisation envoyé! ${email}`);
            router.push("/connexion")
        };

        const onSubmit: SubmitHandler<FogetPasswordFormFielsType> = async (formData) => {
            setIsLoading(true);
           
            handleSendPasswordResetEmail(formData);
           
       
        };

        return (
            <ForgetPasswordView
                form={{
                    errors,
                    handleSubmit,
                    register,
                    isLoading,
                    onSubmit,
                }}
            />

        )
    }

