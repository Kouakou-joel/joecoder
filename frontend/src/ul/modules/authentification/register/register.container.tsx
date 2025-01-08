import { set, SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/form";

import { firebaseCreateUser, sendEmailVerificationProccedure } from "@/api/authentification";
import { toast } from "react-toastify";
import { useToggle } from "@/hoock/use-toggle";
import { firestoreCreateDocument, } from "@/api/firestore";
import { useRouter } from "next/router";

export const RegisterContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle({ initial: false });
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },

    } = useForm<RegisterFormFielsType>();

    const handleCreateUserDocument = async (
        collectionName: string,
        documentID: string,
        data: object,
    ) => {
        const { error } = await firestoreCreateDocument(
            collectionName,
            documentID,
            data,
        )
        if (error) {
            toast.error(error.message)
            setIsLoading(false);
            return;
        }
        toast.success("Bienvenues sur l'app des singes coders...");
        setIsLoading(false);
        reset();
        sendEmailVerificationProccedure();
    };
 
    const handleCreateUserAuthentification = async ({
        email,
        password,
        how_to_login
    }: RegisterFormFielsType) => {
        const { error, data } = await firebaseCreateUser(email, password)
        if (error) {
            toast.error(error.message)
            setIsLoading(false);
            return;
        }
        // toast.success("Bienvenue site des singes coders ! Votre compte a été créé avec succes");
        setIsLoading(false);
        reset();
        router.push("/mon-espace")
        // Ajout du document utilisateur dans la collection users
        const uerDocumentData = {
            uid: data.uid,
            email: email,
            how_to_login:how_to_login,
            creation_Date: new Date,
        }
        handleCreateUserDocument("users", data.uid, uerDocumentData)

    };

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData);

        const { password } = formData;
        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Le mot de passe doit contenir au moins 6 caractères"
            });
            setIsLoading(false);
            return;
        }
             handleCreateUserAuthentification(formData);
        
        
    };
    return (
        <>
            <RegisterView
                form={{
                    errors,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                 

                }} />
        </>

    );
}