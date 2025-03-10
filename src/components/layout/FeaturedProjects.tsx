import { useEffect, useState, useRef } from "react";

import handleFocusedProject from '../../utils/handleFocusedProjects.ts';

import bloomAcademia from '../../assets/images/bloom_academia_cover.svg';
import weatherly from '../../assets/images/weatherly.png';
import arcadiaLibrary from '../../assets/images/arcadiaLibrary.png';

export default function FeaturedProjects() {
    const [isScreenWide, setIsScreenWide] = useState<boolean>(window.screen.width > 768)

    const overlays = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWide(window.screen.width > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (i: number) => {
        if (overlays.current[i]) {
            overlays.current[i].style.opacity = '0';
        };
    };

    const handleMouseLeave = (i: number) => {
        if (overlays.current[i]) {
            overlays.current[i].style.opacity = '0.15';
        };
    };

    type Project = {
        name: string,
        summary: string,
        description: string,
        url: string,
        cover: string,
        coverAlt: string,
        techStack: string[],
    };

    const projects: Project[] = [
        {
            name: 'Bloom Academia',
            summary: 'Self Study Webapp',
            description: 'Bloom Academia is an innovative educational website where students can independently explore and acquire new skills through self-paced courses created by their peers. Developed as part of a collaborative project with some classmates, I took on the back-end developer role, working closely with the database developer to ensure smooth integration. I also helped complete the front end, assisting in delivering a polished and user-friendly platform.',
            url: 'https://github.com/DylanBk/bloom-academia',
            cover: bloomAcademia,
            coverAlt: 'A screenshot taken of a page from the website',
            techStack: ['SQLite', 'Flask', 'Jinja', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript']
        },
        {
            name: 'Weatherly',
            summary: 'Weather App',
            description: 'Weatherly is a website that fetches real time weather data and provides an AI Overview of the weather forecast.\n\nIf the user does not wish to allow the website to access their location, they can optionally enter their location or any other location in the searchbar and get weather data for the entered area.',
            url: 'https://github.com/DylanBk/weatherly',
            cover: weatherly,
            coverAlt: 'A screenshot of Weatherly showing basic info like temperature and wind speed with an AI overview',
            techStack: ['JavaScript', 'React', 'TailwindCSS', 'Weather API', 'Mistral AI']
        },
        {
            name: 'Arcadia Library',
            summary: 'Digital Library',
            description: 'Arcadia Library is a web application similar to an e-commerce platform, users are able to search for books by name or ISBN and check their availability. It offers advanced features like filtering and sorting to simplify finding specific books. Administrators can manage user accounts and inventory, ensuring smooth operations and resource management.',
            url: 'https://github.com/dylanbk/arcadia-library',
            cover: arcadiaLibrary,
            coverAlt: 'Some books and a lamp on a wooden desk',
            techStack: ['SQLAlchemy', 'Flask', 'JavaScript', 'React', 'CSS', 'TailwindCSS']
        }
    ];

    const Projects = () => {
        return (
            projects.map((project: Project, i: number) => {
                const isEven = i % 2 == 0;

                const order = isEven ? 'flex-row' : 'flex-row-reverse'
                const align = isEven ? 'left': 'right';

                return (
                    <section key={project.name} className={`mb-16 backdrop-blur-xl project-container ${align}`}>
                        <div className={`flex ${order} gap-14`}>
                            <div className={`container-left project-text ${align}`}>
                                <div className={`project-title ${align}`}>
                                    <h2 className="-mb-3 text-3xl xl:text-4xl">{project.name}</h2>
                                    <h3 className="text-xl">{project.summary}</h3>
                                </div>
                                <p className={`text-sm xl:text-base !text-${align} project-description ${align}`}>
                                    {project.description.split('\n').map((line, index) => (
                                        <span key={index}> {/* allows newline to be interpreted as <br /> */}
                                        {line}
                                        <br />
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <a
                                className={`container-right project-cover right`}
                                href={project.url}
                                rel="noreferrer"
                                target="_blank"
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave(i)}>
                                <img className="rounded-md" src={project.cover} alt={project.coverAlt} />
                                <div
                                    ref={(el) => {
                                        if (el) {
                                            overlays.current[i] = el;
                                        };
                                    }}
                                    className="project-cover-overlay" />
                            </a>
                        </div>
                        <ul className="tech-stack">
                            {project.techStack.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </section>
                )
            })
        );
    };

    const MobileProjects = () => {
        return (
            projects.map((project, i) => (
                <section key={project.name} className="project-container-mobile">
                    <div className="!text-center project-title">
                        <h2 className="text-3xl">{project.name}</h2>
                        <h3 className="text-xl">{project.summary}</h3>
                    </div>
                    <a
                        href={project.url}
                        rel="noreferrer"
                        target="_blank">
                        <div className="relative">
                            <img
                                className="project-cover-mobile rounded-m"
                                src={project.cover}
                                alt={project.coverAlt}
                            />
                            <div
                                ref={(el) => {
                                    if (el) {
                                        overlays.current[i] = el;
                                    };
                                }}
                                className="project-cover-overlay-mobile"></div>
                        </div>
                    </a>
                    <p className="text-sm project-description-mobile">
                        {project.description}
                    </p>
                    <ul className="tech-stack-mobile">
                        {project.techStack.map(tech => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </section>
            ))
        );
    };

    return (
        <main className="h-max flex flex-col mt-64 text-black dark:text-white">
            <div className='fixed top-0 dot-grid'></div>

            <h1 className="w-fit pb-1 gradient-underline mx-auto text-3xl sm:text-4xl">Featured Projects</h1>

            {isScreenWide ? (
                <div className="flex flex-col mt-20">
                    <Projects />
                </div>
            ) : (
                <div className="flex flex-col gap-10 mt-5" onScroll={handleFocusedProject}>
                    <MobileProjects />
                </div>
            )}
        </main>
    );
};