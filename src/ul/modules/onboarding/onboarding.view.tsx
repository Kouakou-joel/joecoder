import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { Component } from "react";

export const OnboardingView = ({
    stepsList,
    next,
    prev,
    isFirstStep,
    isLastStep,
    getCurrentStep,
}: BaseComponentProps) => {
 
    if(getCurrentStep()?.component){
        const Component = getCurrentStep()?.component.step;
        return(
            <div>
               { Component &&(
                <Component
                    getCurrentStep={getCurrentStep}
                    next={next}
                    prev={prev}
                    isFirstStep={isFirstStep}
                    isLastStep={isLastStep}
                    stepsList={stepsList}
                 />
                )}
            </div>
        );
    }
    return null;
};