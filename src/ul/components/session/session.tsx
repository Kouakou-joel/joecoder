import { useAuth } from "@/context/AuthUserContext";
import { SessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ul/disign-system/spinner/screen-spinner";
import { GUEST, REGISTERED } from "@/ul/session-status";
import { useRouter } from "next/router";

interface props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}

export const Session = ({ children, sessionStatus }: props) => {
    const router = useRouter();
    const { authUserIsLoading, authUser } = useAuth();
    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>;
        }else{
            router.push("/mon-espace")
        }
    }
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted
        

    const shouldRedirectToOnboarding =() => {
        return(
            !authUserIsLoading &&
            authUser && 
            !onboardingIsCompleted &&
            router.asPath !== "/onboarding"
        )
    }
    const shouldNotRedirectToOnboarding =() => {
        return(
            !authUserIsLoading &&
            authUser && 
            onboardingIsCompleted &&
            router.asPath === "/onboarding"
        )
    }
    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding")
        return <ScreenSpinner/>;
    }

    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace")
        return <ScreenSpinner/>;
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>;
        }else{
            router.push("/connexion")
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }
    return <ScreenSpinner />
    
}   
