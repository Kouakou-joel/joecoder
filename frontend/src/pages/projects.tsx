import { Container } from "@/ul/components/container/container";
import { Typography } from "@/ul/disign-system/typography/typography";
import { ProjectCard } from "@/ul/modules/projects/project-card";
import { ProjectsData } from "./projects-data";
;

const ProjectsPage = () => {
    return (
        <Container className="py-20">
            <Typography variant="h2" component="h2" className="mb-8 text-center">
                Nos projets avec devs-studios
            </Typography>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ProjectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Container>
    );
};

export default ProjectsPage;
