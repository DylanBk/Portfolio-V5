import { useEffect, useState, useCallback } from "react";

export default function Technologies() {
    type Logo = {
        src: string,
        alt: string,
        description: string,
    };

    const [logos, setLogos] = useState<Logo[]>([]);

    const updateLogos = useCallback((isDark: boolean) => { //useCallback stops function from rendering unecessarily by caching it
        const baseLogos: Logo[] = [
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
                src: "/media/images/typescript.svg",
                alt: "TypeScript",
                description: "TypeScript is a superset of JavaScript that allows static typing"
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
        ];

        const themeLogos: Logo[] = isDark ? [
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


    return (
        <>
            {logos.length > 1 ? (
            <div className="relative">
                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 md:grid-rows-4 lg:grid-rows-3 gap-6 sm:gap-12 xl:gap-20 !gap-y-8 justify-items-center">
                    {logos.map((logo:  Logo, i: number) => (
                        <div
                            key={i}
                            className="!m-0 sm:m-8 gradient-border">
                            <img src={logo.src} alt={logo.alt} className="h-12 sm:h-16 w-12 sm:w-16 tech-logo" />
                            <span className=" backdrop-blur-md tech-tooltip">{logo.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            ) : (
                <></>
            )}
        </>
    );
};