import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { onboardingStepsListInter } from "@/types/onboarding-steps-list";
import { welcomeStep } from "./component/steps/welcome-step/welccome-step";
import { profileStep } from "./component/steps/profile-step/profile-step";
import { AvatarStep } from "./component/steps/avata-step";
import { FinalStep } from "./component/steps/finale-step/final-step";

export const OnboardingContainer = () => {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const stepsList: onboardingStepsListInter[] = [
        {
            id: 1,
            label: "Bienvenue",
            component: { step: welcomeStep },
        },

        {
            id: 2,
            label: "Profile",
            component: { step: profileStep }
        },
        {
            id: 3,
            label: "photo",
            component: { step: AvatarStep }
        },
        {
            id: 4,
            label: "successfull",
            component: { step: FinalStep }
        }
    ]
    const getCurrentStep = () => {
        return stepsList.find((el) => el.id === currentStep)

    };
    const next = () => {
        if (currentStep < stepsList.length) {
            setCurrentStep(currentStep + 1);
        }
    };
    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const isFirstStep = () => {
        if (currentStep === 1) {
            return true;
        }
        return false;
    }

    const isLastStep = () => {
        if (currentStep === stepsList.length) {
            return true;
        }
        return false;
    };
    return (
        <OnboardingView
            getCurrentStep={getCurrentStep}
            next={next}
            prev={prev}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            stepsList={stepsList}
        />
    )
};