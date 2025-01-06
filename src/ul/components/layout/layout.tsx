
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Container } from "../container/container";
import Footer from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UseAccountNavigation } from "../navigation/user-account-navigation";

interface Props {
    children: React.ReactNode;
    isDisplayBreadcrumbs?: boolean
    WithSidebar?: boolean;
}

export const Layout = ({ children,
    isDisplayBreadcrumbs = true,
    WithSidebar,
}: Props) => {
    let view: React.ReactElement = <></>;

    if (WithSidebar) {
        view = <Container className="mb-14">
            <div className="gap-7 grid grid-cols-12">
                <div className="col-span-3">  <UseAccountNavigation /></div>
                <div className="col-span-9"></div>

            </div>
        </Container>;
    } else {
        view = <>{children}</>;
    }

    return (
        <>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
            {view}
            <Footer />
        </>
    )
}