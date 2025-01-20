import { Typography } from "@/ul/disign-system/typography/typography";
import { Button } from "@/ul/disign-system/button/button";
import Link from "next/link";

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        link: string;
    };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="shadow-md p-4 border rounded-lg">
            <Typography variant="h3" component="h2" className="mb-2">
                {project.title}
            </Typography>
            <Typography variant="body-base" component="p" className="mb-4">
                {project.description}
            </Typography>
            <div className="flex justify-between">
                <Button baseUrl={project.link} variant="accent">
                    Voir le projet
                </Button>
                <Link href="/#">
                    <Button variant="secondary">
                        Retour
                    </Button>
                </Link>
            </div>
        </div>
    );
}; 