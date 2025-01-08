export interface BaseComponentProps{
    next: () => void;
    prev: () => void;
    isFirstStep: () => boolean;
    isLastStep: () => boolean;
    stepsList: onboardingStepsListInter[];
    getCurrentStep: () => onboardingStepsListInter | undefined;
}

export interface onboardingStepsListInter{
    id: number;
    label: string;
    component: { 
        step: React.ComponentType<BaseComponentProps>;
    };
}