import { Project } from "../interfaces/projects";
import { Skill } from "../interfaces/skills";

export const projects: Project[] = [
    {
        name: "Sistema de Ventas con Django, MySQL y TailwindCSS",
        description: "Sistema de ventas funcional que incluye autenticación y diferentes CRUDs para productos, categorías, clientes y ventas, construido con Django, MySQL y TailwindCSS.",
        about: "Este proyecto utiliza una arquitectura modular con aplicaciones específicas para cada funcionalidad, integrando validaciones robustas para gestionar stock, evitar datos duplicados y garantizar consistencia. El backend en Django maneja eficientemente las operaciones, mientras que el frontend, diseñado con TailwindCSS, ofrece una interfaz moderna y responsiva con cálculos automáticos en tiempo real. La implementación de autenticación y seguridad refuerza el acceso controlado, destacando las buenas prácticas y escalabilidad de la solución.",        
        image: "/projects/sistema_ventas.gif",
        technologies: ["Django", "MySQL", "Tailwindcss"],
        github: "https://github.com/KeviinASD/ventas_project_django"
    },
    {
        name: "Generación de Imágenes con IA: FullStack",
        description: "Proyecto fullstack que genera imágenes a partir de texto usando un backend en NestJS y un frontend en Angular, integrado con la API de Hugging Face.",
        image: "/projects/kevin ia.png",
        technologies: ["Nest", "Angular", "Tailwindcss"],
        about: "Este sistema completo utiliza inteligencia artificial avanzada para la generación de imágenes basadas en descripciones textuales. El backend en NestJS gestiona la configuración y procesamiento de los modelos de IA mediante la API de Hugging Face, mientras que el frontend en Angular ofrece una interfaz intuitiva para que los usuarios interactúen y visualicen resultados en tiempo real. Diseñado con una arquitectura moderna y escalable, este proyecto demuestra un enfoque innovador y eficiente en el desarrollo fullstack.",
        github: "asdasdasdas"
    },
    {
        name: "Sistema de Autenticación con Roles y Seguridad Avanzada",
        description: "Backend con autenticación basada en JWT y gestión de roles jerárquicos (User, Admin, SuperAdmin) desarrollado en NestJS, utilizando TypeORM para interactuar con la base de datos.",
        about: "Este proyecto implementa un sistema completo de autenticación y autorización, dividido en dos módulos principales: uno para la gestión de usuarios y otro para manejar las operaciones de login y registro. Utiliza guards personalizados (AuthGuard y RolesGuard) para proteger rutas y garantizar acceso seguro basado en roles. Los decoradores personalizados (@Auth y @ActiveUser) facilitan la implementación de permisos en los controladores. Su arquitectura modular asegura flexibilidad y escalabilidad para proyectos que requieren autenticación robusta y eficiente.",
        image: "/projects/auth.png",
        technologies: ["Nest", "TypeORM", "JWT"],
        github: "https://github.com/KeviinASD/auth-crud-nestjs"
    },
    {
        name: "Deteccion de Enfermedades Foliares Machine Learning",
        description: "Sistema para detectar enfermedades foliares en plantas, con Django, TensorFlow y análisis en tiempo real desde dispositivos móviles.",
        about: "Este proyecto integra TensorFlow y Django para una detección precisa de enfermedades foliares, utilizando DenseNet121 optimizado para dispositivos móviles mediante TensorFlow Lite. El backend en Django maneja el procesamiento de imágenes y predicciones a través de endpoints RESTful, mientras que una aplicación móvil en React Native con Expo ofrece una interfaz interactiva para análisis en tiempo real. Todo fue desplegado en la nube, asegurando escalabilidad y rendimiento en una solución completa y profesional.",
        image: "/projects/pantIA.png",
        technologies: ["React Native", "Expo", "Django", "Tensorflow"],
        github: "https://github.com/KeviinASD/proyecto-app-plant"
    },
    {
        name: "Finanzas Ratios",
        description: "Aplicación financiera desarrollada con React que utiliza inteligencia artificial para interpretar resultados financieros y realizar cálculos avanzados relacionados con la gestión empresarial.",
        about: "Este proyecto utiliza React, React-Router-DOM y ContextAPI para una experiencia de usuario dinámica, integrando inteligencia artificial con Hugging Face y el modelo microsoft/Phi-3-mini-4k-instruct para interpretar datos financieros. Incluye análisis de ratios e indicadores financieros, además de cálculos avanzados y herramientas dinámicas, destacando mi capacidad como Fullstack Developer para combinar tecnologías modernas e IA en soluciones eficientes y profesionales.",
        image: "/projects/finances.gif",
        technologies: ["React", "Tailwindcss"],
        github: "https://github.com/KeviinASD/finance_ratios_project"
    },
    {
        name: "Sistema Escolar",
        description: "Sistema escolar completo desarrollado en Laravel con un backend robusto, basado en MySQL, que integra módulos funcionales para la gestión académica y administrativa, incluyendo manejo de roles para diferentes usuarios.",
        about: "Este sistema integral para colegios fue desarrollado con Laravel y MySQL, permitiendo la gestión de cursos, asignaturas, alumnos, notas y más mediante CRUDs. Soporta múltiples roles, incluyendo Administrador, Director, Docente, Secretaria y Apoderado, cada uno con funcionalidades específicas y dashboards personalizados. El sistema incluye generación de reportes en PDF y una gestión intuitiva, destacando mi habilidad como Fullstack Developer en la creación de soluciones modulares y escalables.",
        image: "/projects/school.gif",
        technologies: ["Laravel", "MySQL", "Tailwindcss"],
        github: "https://github.com/KeviinASD/school_proyect_SI"
    }
]

export const skills: Skill[] = [
    {
        title: "Frontend Development",
        description: "I create modern, responsive, and user-friendly interfaces using the latest technologies.",
        image: "./front.png",
        frameworks: ["react", "angular", "next", "tailwindcss"],
        tecnologies: ["javascript", "typescript"],
    },
    {
        title: "Backend Development",
        description: "I develop robust server-side applications and APIs to support seamless data operations.",
        image: "./back.gif",
        frameworks: ["spring", "nest", "django", "laravel"],
        tecnologies: ["mysql", "mongo","java", "python", "nodejs", "php"]
    },
    {
        title: "DevOps and Tools",
        description: "I manage deployments, version control, and collaboration tools to streamline development.",
        image: "./cloud.jpg",
        tecnologies: ["docker", "git", "github", "heroku"]
    },
    {
        title: "Other Skills",
        description: "I continuously learn and adapt to improve my problem-solving and technical expertise.",
        image: "./learning.jpg",
    }
]