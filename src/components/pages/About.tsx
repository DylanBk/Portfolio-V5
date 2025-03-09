import { RefObject, useRef } from 'react';

import Header from '../layout/Header.tsx';
import Footer from '../layout/Footer.tsx';

import avatar from '../../assets/images/avatar.svg';
import pfp from '../../assets/images/d-pfp.png';
import emailDark from '../../assets/icons/email-dark.svg';
import emailLight from '../../assets/icons/email-light.svg'
import linkedinDark from '../../assets/icons/linkedin-dark.svg'
import linkedinLight from '../../assets/icons/linkedin-light.svg'
import githubDark from '../../assets/icons/github-dark.svg'
import githubLight from '../../assets/icons/github-light.svg'

export default function About() {
    const whoRef = useRef<HTMLSpanElement>(null);
    const aspirationRef = useRef<HTMLSpanElement>(null);
    const collegeRef = useRef<HTMLSpanElement>(null);

    type Profile = {
        pfp: string,
        name: string,
        age: number,
        location: string,
        education: string | null,
        learning: string | null,
        project: string | null,
        working: string | null,
    }

    const profile: Profile = {
        pfp: pfp,
        name: 'Dylan',
        age: 17,
        location: 'Norwich, UK 🇬🇧',
        education: 'College Student',
        learning: 'Vite and TypeScript',
        project: 'Portfolio',
        working: 'N/A',
    };

    const readMore = (el: RefObject<HTMLSpanElement | null>) => { // will never be null but removes error message
        if (el.current) {
            const btn = el.current.parentNode?.querySelector('button') as HTMLButtonElement;
            const br = btn.previousElementSibling as HTMLBRElement;

            if (btn.style.display !== 'none') {
                btn.style.display = 'none';
                br.style.display = 'none';
                el.current.style.display = 'flex';
            };
        };
    };


    return (
        <div>
            <title>About | Dylan Bullock | Software Developer</title>

            <Header />

            <main>
                <div className='fixed top-0 dot-grid'></div>

                <div className="w-fit flex flex-row items-end gap-5 pb-4 mx-auto mt-52 sm:mt-56 text-nowrap smooth-change gradient-underline">
                    <img
                        className="w-20 sm:w-24 md:w-32 z-10"
                        src={avatar}
                        alt="avatar icon" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-black dark:text-white">About Me</h1>
                </div>

                <div className="w-11/12 sm:w-4/5 lg:w-2/3 py-8 sm:py-14 md:py-20 mx-auto rounded-xl mt-8 bg-deepBlue/10 backdrop-blur-xs">
                    <div className='w-11/12 sm:w-5/6 flex flex-col gap-28 px-2 sm:px-6 py-6 border-1 border-midGrey rounded-4xl mx-auto'>
                        <section className='w-full sm:w-fit flex flex-col sm:flex-row gap-4 items-center sm:items-start px-3 py-4 border-1 border-midGrey rounded-md mx-auto text-nowrap text-black dark:text-white'>
                            <img className='h-24 w-24 scale-3d rounded-full' src={profile.pfp} alt="A photo of me" />

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col xs:flex-row gap-4">
                                    <div className="flex flex-col">
                                        <p className='text-xl'>{profile.name}</p>
                                        <p className='text-sm font-thin'>{profile.age}</p>
                                        <p className='text-sm font-thin'>{profile.location}</p>
                                    </div>

                                    <div className="flex flex-col gap-1 text-xs md:text-sm text-wrap">
                                        <p>Currently Learning: <strong>{profile.learning}</strong></p>
                                        <p>Working On: <strong>{profile.project}</strong></p>
                                        <p>Employed At: <strong>{profile.working}</strong></p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-0.5 justify-center sm:justify-start sm:-ml-1 mt-1 sm:mt-0">
                                    <a 
                                        className='w-8 p-1 rounded-full hover:bg-midGrey focus:bg-midGrey dark:hover:bg-deepBlue dark:focus:bg-deepBlue'
                                        href="mailto:dylanbullock.dev@gmail.com"
                                        rel='noreferrer'
                                        target='_blank'>
                                            <picture>
                                                <source srcSet={emailLight} media="(prefers-color-scheme: light)"></source>
                                                <source srcSet={emailDark} media="(prefers-color-scheme: dark)"></source>
                                                <img srcSet={emailLight} alt="Email Icon" />
                                            </picture>
                                    </a>
                                    <a
                                        className='w-8 p-1.5 rounded-full hover:bg-midGrey focus:bg-midGrey dark:hover:bg-deepBlue dark:focus:bg-deepBlue'
                                        href="https://www.linkedin.com/in/dylanbkdev"
                                        rel='noreferrer'
                                        target='_blank'>
                                        <picture>
                                            <source srcSet={linkedinLight} media="(prefers-color-scheme: light)"></source>
                                            <source srcSet={linkedinDark} media="(prefers-color-scheme: dark)"></source>
                                            <img srcSet={linkedinLight} alt="Linkedin Icon" />
                                        </picture>
                                    </a>
                                    <a
                                        className='w-8 p-1.5 rounded-full hover:bg-midGrey focus:bg-midGrey dark:hover:bg-deepBlue dark:focus:bg-deepBlue'
                                        href="https://github.com/DylanBk"
                                        rel='noreferrer'
                                        target='_blank'>
                                        <picture>
                                            <source srcSet={githubLight} media="(prefers-color-scheme: light)"></source>
                                            <source srcSet={githubDark} media="(prefers-color-scheme: dark)"></source>
                                            <img srcSet={githubLight} alt="Github Icon" />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col mx-auto text-black dark:text-white smooth-change">
                            <h2 className="relative text-xl sm:text-2xl text-center"><span className='absolute left-0 pr-2'>🧑‍💻</span><p className='px-8'>Who am I?</p></h2>
                            <p className="mt-3 text-base text-pretty">
                            I'm Dylan, a 17-year-old college student studying Digital Production, Design, and Development.
                            <br /><br />
                            I love designing sleek, modern UIs and bringing them to life as functional products.
                            <br /><br />
                            As someone who enjoys writing code for both the backend and frontend sections of websites, I am going down the full stack development route, and loving every step of the journey.
                            <br />
                            <button
                                className=' flex text-midBlue hover:text-darkBlue focus:text-darkBlue cursor-pointer'
                                onClick={() => readMore(whoRef)}>
                                Read More...
                            </button>
                            <br /><br />
                            <span
                                ref={whoRef}
                                className='hidden'>
                                Beyond web development, I have discovered a new joy in working with data; I like to write scripts that process data and convert it into a human-friendly, visual format, ie creating dashboards for user behaviour.
                                <br /><br />
                                Aside from coding, I'm often working out at the gym, reading, or playing games. I also like to cook meals and enjoy eating them even more.
                            </span>
                            </p>
                        </section>

                        <section className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col mx-auto text-black dark:text-white">
                            <h2 className="relative text-xl sm:text-2xl text-center"><span className="absolute left-0">🎯</span><p className='px-8'>My aspirations?</p></h2>
                            <p className="mt-3 text-base text-pretty">
                            My short-term goals encompass mastering React and integrating it with Next, and improving my proficiency in Pandas, NumPy, and Matplotlib.
                            <br />
                            <button
                                className=' flex text-midBlue hover:text-darkBlue focus:text-darkBlue cursor-pointer'
                                onClick={() => readMore(aspirationRef)}>
                                Read More...
                            </button>
                            <br /><br />
                            <span
                                ref={aspirationRef}
                                className="hidden">
                                In the near future, I aim to secure an apprenticeship or a place on a computing science course at university. From there, I hope to pursue a career in web development or data engineering, or maybe even a blend of both.
                                <br /><br />
                                Beyond education, I would like to get a long-term position in a company contributing to data-driven projects or web development, continuously expanding my expertise and knowledge.
                            </span>
                            </p>
                        </section>

                        <section className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col mx-auto text-black dark:text-white">
                            <h2 className="relative text-xl sm:text-2xl text-center"><span className="absolute left-0 pr-2">🎓</span><p className='px-8'>My College Experience</p></h2>
                            <p className="mt-3 text-base text-pretty">
                            I am nearing the end of my college course, and over the past two years, I have learned a lot and had some incredible opportunities.
                            <br />
                            <button
                                className=' flex text-midBlue hover:text-darkBlue focus:text-darkBlue cursor-pointer'
                                onClick={() => readMore(collegeRef)}>
                                Read More...
                            </button>
                            <br /><br />
                            <span
                                ref={collegeRef}
                                className="hidden">
                                In my first year, it was focused primarily on theory, principles, legalisation, and other considerations. Apart from that, it also covered practical applications of data processing with Pandas and Matplotlib. In the new year, I attended Nordevcon 2024 which was an exciting insight into the industry and a great learning experience. Towards the end, I started to learn web development principles and the basics of HTML, CSS, and JavaScript post-exam period. For the end-of-year project, I had some help learning Flask and then taught myself SQLite and TailwindCSS.
                                <br /><br />
                                When the second year began, I was taught React, which I had begun learning in the summer break. Mock exams have taken a large portion out of the year and the real exams will take even more. In my own time, I have taught myself a lot of things such as SQLAlchemy, command line, Git, WebSockets, and TypeScript. In May, I will start my work placement which I am ecstatic for and looking forward to very much.
                            </span>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};