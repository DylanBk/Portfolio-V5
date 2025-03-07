import { useEffect, useState, useCallback } from "react";

export default function Technologies() {
    const [isScreenWide, setIsScreenWide] = useState<boolean>(window.screen.width > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWide(window.screen.width > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    type logo = {
        src: string,
        alt: string,
        description: string,
    };

    const [logos, setLogos] = useState<logo[]>([]);

    const updateLogos = useCallback((isDark: boolean) => { //useCallback stops function from rendering unecessarily by caching it
        const baseLogos: logo[] = [
            {
                src: "/media/images/html5.svg",
                alt: "HTML5",
                description: "HTML is the basic building blocks for creating web pages.",
            },
            {
                src: "/media/images/css3.svg",
                alt: "CSS3",
                description: "CSS is used to style web pages by adding colors, fonts, and layouts.",
            },
            {
                src: "/media/images/tailwindcss.svg",
                alt: "Tailwind CSS",
                description: "Tailwind CSS is a utility-first CSS framework that helps designers quickly style web pages.",
            },
            {
                src: "/media/images/react.svg",
                alt: "React",
                description: "React is a JavaScript library for building user interfaces.",
            },
            {
                src: "/media/images/javascript.svg",
                alt: "JavaScript",
                description: "JavaScript is a programming language that makes websites interactive.",
            },
            {
                src: "/media/images/nodedotjs.svg",
                alt: "Node.js",
                description: "Node.js is a runtime environment that allows JavaScript to run on the server.",
            },
            {
                src: "/media/images/jinja.svg",
                alt: "Jinja",
                description: "Jinja is a templating engine for Python.",
            },
            {
                src: "/media/images/python.svg",
                alt: "Python",
                description: "Python is a popular programming language used for building all sorts of software.",
            },
            {
                src: "/media/images/sqlite.svg",
                alt: "SQLite",
                description: "SQLite is a simple database used to store and retrieve data.",
            },
            {
                src: "/media/images/sqlalchemy.webp",
                alt: "SQLAlchemy",
                description: "SQLAlchemy is a Python tool used to interact with databases.",
            },
            {
                src: "/media/images/express-dark.svg",
                alt: "Express",
                description: "Express is a web application framework for Node.js.",
            },
            {
                src: "/media/images/flask-dark.svg",
                alt: "Flask",
                description: "Flask is a web application framework for Python.",
            },
        ];

        const themeLogos: logo[] = isDark ? [
            {
                src: "/media/images/express-dark.svg",
                alt: "Express",
                description: "Express is a web application framework for Node.js.",
            },
            {
                src: "/media/images/flask-dark.svg",
                alt: "Flask",
                description: "Flask is a web application framework for Python",
            },
        ] : [
            {
                src: "/media/images/express-light.svg",
                alt: "Express",
                description: "Express is a web application framework for Node.js.",
            },
            {
                src: "/media/images/flask-light.svg",
                alt: "Flask",
                description: "Flask is a web application framework for Python",
            },
        ];

        setLogos([...baseLogos, ...themeLogos]);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        updateLogos(mq.matches);

        const handleChange = (e: MediaQueryListEvent) => updateLogos(e.matches);

        mq.addEventListener("change", handleChange);

        return () => mq.removeEventListener("change", handleChange);
    }, [updateLogos]);

    console.log('logos', logos[0].src, typeof(logos))


    return (
        <div className="bg-almostWhite dark:bg-onyxBlack select-none">
            {logos ? (
                !isScreenWide ? (
                    <div className="flex flex-col items-center mt-10">
                        <div className="flex">
                            <div className="relative">
                                <img src={logos[0].src} alt={logos[0].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[0].description}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative">
                                <img src={logos[1].src} alt={logos[1].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[1].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[2].src} alt={logos[2].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[2].description}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative">
                                <img src={logos[3].src} alt={logos[3].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[3].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[4].src} alt={logos[4].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[4].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[5].src} alt={logos[5].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[5].description}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative">
                                <img src={logos[6].src} alt={logos[6].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[6].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[7].src} alt={logos[7].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[7].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[8].src} alt={logos[8].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[8].description}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative">
                                <img src={logos[9].src} alt={logos[9].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[9].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[10].src} alt={logos[10].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[10].description}</span>
                            </div>
                            <div className="relative">
                                <img src={logos[11].src} alt={logos[11].alt} className="h-16 w-16 tech-logo-mobile" />
                                <span className="tech-tooltip">{logos[11].description}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-1/2 flex flex-row items-center"> {/* on tooltips, explain the tech */}
                        <div className="flex flex-col">
                            <div className="relative gradient-border">
                                <img src={logos[0].src} alt={logos[0].alt} className="h-16 w-16 tech-logo m-auto" />
                                <span className="tech-tooltip">{logos[0].description}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="gradient-border">
                                <img src={logos[1].src} alt={logos[1].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[1].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[2].src} alt={logos[2].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[2].description}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="gradient-border">
                                <img src={logos[3].src} alt={logos[3].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[3].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[4].src} alt={logos[4].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[4].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[5].src} alt={logos[5].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[5].description}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="gradient-border">
                                <img src={logos[6].src} alt={logos[6].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[6].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[7].src} alt={logos[7].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[7].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[8].src} alt={logos[8].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[8].description}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="gradient-border">
                                <img src={logos[9].src} alt={logos[9].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[9].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[10].src} alt={logos[10].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[10].description}</span>
                            </div>
                            <div className="gradient-border">
                                <img src={logos[11].src} alt={logos[11].alt} className="h-16 w-16 tech-logo" />
                                <span className="tech-tooltip">{logos[11].description}</span>
                            </div>
                        </div>
                    </div>

                )
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};