import { useAuth } from "@/context/AuthUserContext"
import { UserAccountView } from "./user-account.view"
import { useToggle } from "@/hoock/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileFormFielsType } from "@/types/form";
import { useEffect } from "react";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
    const { authUser } = useAuth();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        register,
        setError,
    
    } = useForm<UserProfileFormFielsType>();
    
    const { displayName, expertise, biography, github, linkedin } = authUser.userDocument;
    useEffect(()=>{
        const fielstToUpdate: (
            "displayName" 
            | "expertise" 
            | "biography" 
            | "linkedin" 
            | "github"
        )[] = ["displayName", "expertise", "biography", "linkedin", "github"];
        for (const field of fielstToUpdate) {
            setValue(field, authUser.userDocument[field]);
        }
    },[]);

    const handleUpdateUserDocument = async (formData: UserProfileFormFielsType) => {
        setIsLoading(true);
        const { error } = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            formData,
        );
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Profil mis à jour avec succès");
        setIsLoading(false);

    };

    const onSubmit: SubmitHandler<UserProfileFormFielsType> = (formData) => {
        if (formData.linkedin && formData.linkedin.includes("linkedin.com/")) {
            setError("linkedin", {
                type: "manual",
                message: "Veuillez renseigner un lien valide pour Linkedin"
            });
            return;
        }
        if (formData.github && formData.github.includes("github.com/")) {
            setError("github", {
                type: "manual",
                message: "Veuillez renseigner un lien valide pour Github"
            });
            return;
        }
        
        if(
            displayName!== formData.displayName ||
            expertise!== formData.expertise ||
            biography!== formData.biography ||
            linkedin!== formData.linkedin ||
            github!== formData.github
        ){
            for(const key in formData){
                if(
                    FormData.hasOwnProperty(key) &&
                    formData[key as keyof UserProfileFormFielsType] == undefined
                ){
                    delete formData[key as keyof UserProfileFormFielsType];
                }
            }
            handleUpdateUserDocument(formData);
            return;
        }

    }

    return (
        <div className="flex justify-center pt-20 pb-40">
            <UserAccountView
                form={{
                    errors,
                    control,
                    register,
                    isLoading,
                    onSubmit,
                    handleSubmit,

                }}
            />
        </div>
    )
}