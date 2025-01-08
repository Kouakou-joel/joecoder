
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"
import { LoginFormFielsType } from "@/types/form";

import { useToggle } from "@/hoock/use-toggle";
import { firebaseSignInUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



export const LoginContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm<LoginFormFielsType>();

    const handleSignInUser = async ({ email, password, }: LoginFormFielsType) => {

        const { error } = await firebaseSignInUser(email, password);
        if (error) {
            toast.error(error.message)
            setIsLoading(false);
            return;

        }
        toast.success("Bienvenue sur l'app des singes coders...");
        setIsLoading(false);
        reset();
        router.push("/mon-espace")
    };

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;
        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Le mot de passe doit contenir au moins 6 caractères"
            });
            setIsLoading(false);
            return;

        }
        handleSignInUser(formData);
    };
    return (
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
};
