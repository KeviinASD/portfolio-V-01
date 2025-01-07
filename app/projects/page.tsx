
import CardProject from "@/src/components/CardProject";
import { Project } from "@/src/interfaces/projects";

const ProjectsPage = () => {

    const projects: Project[] = [
        {
            name: "Piggment",
            description: "The Gradients and colors for the next smart creator",
            image: "./projects/project2.jpg",
            technologies: ["React", "Next", "Tailwindcss"],
            about: "Test Engineers on their skills and competence.",
            website: "https://piggment.vercel.app/",
            github: "asdasdasdas"
        },
        {
            name: "Piggment",
            description: "The Gradients and colors for the next smart creator",
            image: "./projects/project2.jpg",
            technologies: ["React", "Next", "Tailwindcss"],
        },
        {
            name: "Piggment",
            description: "The Gradients and colors for the next smart creator",
            image: "./projects/project2.jpg",
            technologies: ["React", "Next", "Tailwindcss"],
        },
        {
            name: "Piggment",
            description: "The Gradients and colors for the next smart creator",
            image: "./projects/project2.jpg",
            technologies: ["React", "Next", "Tailwindcss"],
        },
        {
            name: "Piggment",
            description: "The Gradients and colors for the next smart creator",
            image: "./projects/project2.jpg",
            technologies: ["React", "Next", "Tailwindcss"],
        }
    ]
    return (
        <section className="pl-20 panel-first">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {/* CONTENIDO */}
                <div className="md:w-5/6 w-full">
                    <h1 className="mt-20 mb-10 text-5xl font-extrabold">Projects.</h1>
                    <div className="md:columns-2">
                        {projects.map((project, index) => (
                            <CardProject key={index} project={project} />
                        )
                    )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsPage;