
import { SessionStatusTypes } from "@/types/session-status-types";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Container } from "../container/container";
import Footer from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UseAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { CallToActionSidebarComponent } from "@/ul/modules/landing-page/components/Call-to-action/call-to-action-sidebar";
import { CallToFormBottom } from "@/ul/modules/landing-page/components/Call-to-action/call-to-form-bottom";

interface Props {
    children: React.ReactNode;
    isDisplayBreadcrumbs?: boolean
    WithSidebar?: boolean;
    sessionStatus?: SessionStatusTypes;
}

export const Layout = ({ children,
    isDisplayBreadcrumbs = true,
    WithSidebar,
    sessionStatus,
}: Props) => {
    let view: React.ReactElement = <></>;

    if (WithSidebar) {
        view = <Container className="mb-14">
            <div className="gap-7 grid grid-cols-12">
                <div className="space-y-8 col-span-3"> 
                     <UseAccountNavigation />
                     <CallToActionSidebarComponent />
                     <CallToFormBottom />
                     </div>
                <div className="col-span-9">{children}</div>

            </div>
        </Container>;
    } else {
        view = <>{children}</>;
    }

    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
            {view}
            <Footer />
        </Session>
    )
}