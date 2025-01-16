/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hoock/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Logo } from "@/ul/disign-system/logo/logo";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/router"; // Importer useRouter pour la redirection
export const FinalStep = ({ isLastStep }: BaseComponentProps) => {
    const { authUser } = useAuth();
    const { value: isLoading, toggle } = useToggle();
    const router = useRouter(); // Initialiser le hook de redirection

 // Ajout des dépendances dans useEffect

    const handleCloseOnboarding = async () => {
        toggle();
        const data = {
            onboardingIsCompleted: true,
        };
        try {
            const { error } = await firestoreUpdateDocument("users", authUser.uid, data);
            if (error) {
                toast.error(error.message);
            }
            toast.success("Onboarding complété avec succès");
            // Rediriger l'utilisateur vers son profil
            router.push(`/profile/${authUser.uid}`);
        } catch (error: any) {
            toast.error(error.message || "Une erreur inconnue est survenue");
        } finally {
            toggle();
        }
    };

    return (
        <>
          
            <div className="relative pb-[91px] h-screen">
                <div className="py-16 h-full overflow-auto">
                    <Container className="h-full">
                        <div className="space-y-5 mx-auto pb-5 w-full max-w-xl">
                            <div className="flex justify-center">
                                <Logo size="large" />
                            </div>
                            <Typography
                                variant="h1"
                                component="h1"
                                className="text-center"
                            >
                                Félicitations ! 🥳
                            </Typography>
                            <Typography
                                variant="h5"
                                component="p"
                                theme="gray"
                                className="text-center">
                                Nous vous remercions de votre inscription sur l application Singes Codeurs !
                                Vous avez réussi à créer votre compte pour <b>{authUser.displayName}</b> !{" "}
                                Si vous avez besoin d aide pour vous connecter ou avez d autres questions,
                                contactez-nous à :{" "}
                                <a href="mailto:support@singescodeurs.com" target="_blank" className="cursor-pointer">
                                    support@singescodeurs.com
                                </a>.
                            </Typography>
                        </div>
                    </Container>
                </div>
            </div>
            <OnboardingFooter
                next={handleCloseOnboarding}
                isLastStep={isLastStep()}
                isLoading={isLoading}
            />
        </>
    );
};
