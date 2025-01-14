import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hoock/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Logo } from "@/ul/disign-system/logo/logo";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export const FinalStep = ({ isLastStep }: BaseComponentProps) => {
    const { authUser } = useAuth();
    const { value: isLoading, toggle } = useToggle();

    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio),
            });
        }
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, { spread: 26, startVelocity: 55 });
        makeShot(0.2, { spread: 60 });
        makeShot(0.35, { spread: 100, decay: 0.9 });
        makeShot(0.1, { spread: 120, startVelocity: 25, decay: 0.91 });
        toggle();
    }, [makeShot, toggle]);
    useEffect(() => {
        setTimeout(() => {
            fire();
        }, 50);
    })

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
        } catch (error: any) {
            toast.error(error.message || "Une erreur inconnue est survenue");
        } finally {
            toggle();
        }
    };
    return (
        <>
            <ReactCanvasConfetti
            // refConfetti={getInstance}
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
            />
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
                                className="text-center"
                            >
                                Nous vous remercions de votre inscription sur l'application Singes Codeurs !
                                Vous avez réussi à créer votre compte pour <b>{authUser.displayName}</b> !{" "}
                                Si vous avez besoin d'aide pour vous connecter ou avez d'autres questions,
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
}
