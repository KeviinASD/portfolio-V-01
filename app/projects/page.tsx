
import CardProject from "@/src/components/CardProject";
import { projects } from "@/src/api/data";

const ProjectsPage = () => {

    return (
        <section className="pl-20 panel-first">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {/* CONTENIDO */}
                <div className="md:w-5/6 w-full">
                    <h1 className="mt-20 mb-10 text-5xl font-extrabold">Projects.</h1>
                    {/*  */}
                    <nav className="flex md:justify-center gap-10">
                        <button>All</button>
                        <button>Nest</button>
                        <button>React</button>
                        <button>Django</button>
                    </nav>  
                    {/* PROYECTOS */}
                    <div className="md:columns-2 mt-6">
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