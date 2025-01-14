import { onboardingStepsListInter } from "@/types/onboarding-steps-list";
import clsx from "clsx";

interface props {
    tabs: onboardingStepsListInter[];
    getCurrentStep: () => onboardingStepsListInter | undefined;

}
export const OnboardingTabs = ({ tabs, getCurrentStep }: props) => {
    return (
        <div className="inline-block relative">
            <div className="flex items-center space-x-5">
                {tabs &&
                    tabs.map((tab) => 
                        tab.id !==tabs.length && (
                        <div
                            key={tab.id}
                            className={clsx(
                              
                                getCurrentStep && getCurrentStep()?.id === tab.id ?
                                    "border-primary font-bold text-primary-400" :
                                "border-gray-400",
                                "relative z-10 py-1.5 border-b-[2px]"
                            )}

                        >
                            {tab.label}
                           
                        </div>
                        
                    ))}
                     <div className="bottom-0 left-0 absolute bg-gray-400 w-full h-[2px]" />
            </div>

        </div>
    )
} 