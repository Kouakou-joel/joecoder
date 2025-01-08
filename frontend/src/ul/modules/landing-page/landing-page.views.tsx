import { CallToActionView } from "./components/Call-to-action/callToAction.view"
import { CoderJoeSlackViews } from "./components/coder-joe-slack/coder-joe-slack.views"
import { CurrentCoursesView } from "./components/current-courses-cta.view/current-courses.view"
import { FeaturedView } from "./components/feadured.view"
import { HeroTopView } from "./components/hero-top-view"
import { RightLandingListeView } from "./components/rightlanding-liste/rightlanding-liste.view"

export const LandingPageViews = () => {
    return <>
        <HeroTopView />
        <FeaturedView />
        <CoderJoeSlackViews/> 
        <CurrentCoursesView />
        <RightLandingListeView/>
        <CallToActionView />

    </>
}