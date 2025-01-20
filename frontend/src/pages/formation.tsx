import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { Button } from "@/ul/disign-system/button/button";
import { CurrentCoursesView } from "@/ul/modules/landing-page/components/current-courses-cta.view/current-courses.view";

const Formation = () => {
    return (
        <Container className="py-20">
            <Typography variant="h2" component="h1" className="mb-8 text-center">
                Nos Formations
            </Typography>
            <Typography variant="body-lg" component="p" className="mb-8 text-center">
                Découvrez nos formations gratuites et payantes pour améliorer vos compétences en développement.
            </Typography>
            <CurrentCoursesView />
            <div className="mt-10 text-center">
                <Button variant="accent" baseUrl="https://nextjs.org/docs">
                    Commencer
                </Button>
            </div>
        </Container>
    );
};

export default Formation;
