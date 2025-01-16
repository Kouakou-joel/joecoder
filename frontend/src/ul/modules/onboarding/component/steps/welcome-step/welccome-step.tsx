
import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ul/components/container/container"
import { Typography } from "@/ul/disign-system/typography/typography"
import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboading-tabs"

export const welcomeStep = (
    { next,
        isFirstStep,
        isLastStep,
        stepsList,
        getCurrentStep,

    }: BaseComponentProps) => {

    return (
        <div className="relative pb-[91px] h-screen">
            <div className="h-full overflow-auto">
                <Container className="grid grid-cols-12 h-full">
                    <div className="relative z-10 flex items-center col-span-6 py-10 h-full">
                        <div className="space-y-5 pb-4.5 w-full">
                            <OnboardingTabs
                            tabs={stepsList}
                            getCurrentStep={getCurrentStep} 
                            />
                            <Typography
                                variant="h1"
                                component="h1"
                            >
                                Bienvenue sur l app des singes coders !
                                Devs Studio 😎
                            </Typography>
                            <Typography
                                variant="body-base"
                                component="p"
                                theme="gray"
                            >
                                Viens traiter avec les developpeurs aussi  fous que toi,
                                montre tes pojets persos et recois feedback conssecutifs (ou fais-toi carrement descendre).
                                Prete a cree des trucs incrroyables.
                                Attends tes feedbacks et valides tes projets!
                                C est aussi un endroit pour faire des decouvertes et apprendre de nouvelles choses.
                                N oublie pas de te connecter avec des devs web et de booster ta carriere.
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center col-span-6 h-full">
                        <div className="w-full">
                            <Image
                             src="/assets/images/top.svg"
                             alt="illustration-welcome"
                             className="object-center object-cover"
                             width={450}
                             height={230}
                           
                             />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter
                next={next}
                isFirstStep={isFirstStep()}
                isLastStep={isLastStep()}


            />
        </div>
    )
}   
