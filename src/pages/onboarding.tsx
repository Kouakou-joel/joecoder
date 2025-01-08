import { Seo } from "@/ul/components/seo/seo";
import { REGISTERED } from "@/ul/session-status";
import { Session } from "@/ul/components/session/session";
import { OnboardingContainer } from "@/ul/modules/onboarding/onboarding.container";


export default function Onboarding() {
    return (
        <>

            <Seo title="onboarding" description="description de la page onboarding" />

            <Session sessionStatus={REGISTERED}>
                <div className="flex justify-center items-center">
                    <OnboardingContainer />
                </div>
            </Session>

        </>
    );
}
