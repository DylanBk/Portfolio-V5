import { Link } from "react-router-dom";

import email_icon_light from '../../assets/icons/email-light.svg';
import email_icon_dark from '../../assets/icons/email-dark.svg';
import github_icon_light from '../../assets/icons/github-light.svg';
import github_icon_dark from '../../assets/icons/github-dark.svg';
import linkedin_icon_light from '../../assets/icons/linkedin-light.svg';
import linkedin_icon_dark from '../../assets/icons/linkedin-dark.svg';

export default function Footer() {
    return (
        <footer className="min-h-44 w-full relative flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-around px-2 mt-28 bg-almostWhite dark:bg-onyxBlack dark:text-white">
            <section className="flex flex-col gap-1">
                <h3 className="mb-1 text-lg">Pages</h3>
                <Link
                    className="w-fit secondary-link"
                    to="/">
                    Home Page
                </Link>
                <Link
                    className="w-fit secondary-link"
                    to="/about">
                    About Me
                </Link>
                <Link
                    className="w-fit secondary-link"
                    to="/projects">
                    My Projects
                </Link>
            </section>
            <section className="flex flex-col gap-1">
                <h3 className="mb-1 text-lg">Resources</h3>
                <a
                    className="w-fit secondary-link"
                    href="/media/pdfs/CV-Dylan-Bullock.pdf"
                    target="_bank"
                    download={true}
                    aria-label="this will download as a PDF">
                    Download my CV
                </a>
                <a
                    className="w-fit secondary-link"
                    href="mailto:dev@dylanbullock.co.uk">
                    Send me an e-mail
                </a>
            </section>
            <section className="relative flex flex-col gap-1">
                <h3 className="mb-1 text-lg sm:text-center">Contact Me</h3>
                <div className="flex flex-row gap-2 items-center">
                    <a
                        className="flex items-center justify-center sm:p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                        href="mailto:dev@dylanbullock.co.uk"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="email me">
                        <div className="w-6 sm:w-10">
                            <picture aria-hidden="true">
                                <source srcSet={email_icon_light} media="(prefers-color-scheme: light)"></source>
                                <source srcSet={email_icon_dark} media="(prefers-color-scheme: dark)"></source>
                                <img srcSet={email_icon_light} alt="Email Icon" />
                            </picture>
                        </div>
                    </a>
                    <a
                        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                        href="https://github.com/DylanBk"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="my github">
                        <div className="w-6 sm:w-10">
                            <picture aria-hidden="true">
                                <source srcSet={github_icon_light} media="(prefers-color-scheme: light)"></source>
                                <source srcSet={github_icon_dark} media="(prefers-color-scheme: dark)"></source>
                                <img srcSet={github_icon_light} alt="Github Icon" />
                            </picture>
                        </div>
                    </a>
                    <a
                        className="flex items-center justify-center sm:p-2 rounded-full hover:bg-gray-300 dark:hover:bg-deepBlue hover:scale-105 focus:bg-gray-300 dark:focus:bg-deepBlue focus:scale-105 transition-all duration-300"
                        href="https://www.linkedin.com/in/dylanbkdev/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="my linkedin">
                        <div className="w-5 sm:w-9 m-1">
                            <picture aria-hidden="true">
                                <source srcSet={linkedin_icon_light} media="(prefers-color-scheme: light)"></source>
                                <source srcSet={linkedin_icon_dark} media="(prefers-color-scheme: dark)"></source>
                                <img srcSet={linkedin_icon_light} alt="Linkedin Icon" />
                            </picture>
                        </div>
                    </a>
                </div>
            </section>
            <small className="sm:absolute sm:bottom-2 mx-auto dark:text-gray-300">&copy; Copyright 2025, Dylan Bullock</small>
        </footer>
    );
};