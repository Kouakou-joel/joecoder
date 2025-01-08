import { Button } from "@/ul/disign-system/button/button";
import clsx from "clsx";

interface props {
    next?: () => void,
    prev?: () => void,
    isFirstStep?: boolean,
    isLastStep?: boolean,
    isLoading?: boolean,

}
export const OnboardingFooter = ({ next,
    prev,
    isFirstStep,
    isLastStep,
    isLoading,
}: props) => {
    let actionButtonTittle: string;

    if (isFirstStep) {
        actionButtonTittle = "Demarrer"
    } else if (isLastStep) {
        actionButtonTittle = "Terminer"
    } else {
        actionButtonTittle = "Continuer"
    }
return(
    <div className="bottom-0 left-0 absolute border-gray-400 bg-white p-5 border-t w-full">
      
        <div className={clsx(
            prev && !next && "justify-start",
            !prev && next &&  "justify-end",
            prev && next && "justify-between",
            "flex items-center gap-5"
        )}>
            {prev && (
                <Button
                    disabled={isLoading}
                    variant={!isLoading ? "outline" : "disabled"}
                    action={prev}
                >
                    Retour
                </Button>
            )}
            {next && (
                <Button
                    isLoading={isLoading}
                    variant={isLoading ? "disabled" : "accent"}
                    action={next}
                    >  
                    {actionButtonTittle}
                    </Button>
            )}

        </div>
    </div>
)
}