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
    type Profile = {
        pfp: string,
        name: string,
        age: number,
        location: string,
        education: string | null,
        learning: string | null,
        project: string | null,
        working: string | null,
        socials: object
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
        socials: {
            github: 'https://github.com/DylanBk',
            linkedIn: 'https://linkedin.com/DylanBkDev',
            email: '@mailto:dylanbullock.dev@gmail.com'
        }
    }


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

                <div className="w-11/12 sm:w-4/5 lg:w-2/3 py-20 mx-auto rounded-sm mt-8 bg-deepBlue/10 backdrop-blur-xs">
                    <div className='w-5/6 flex flex-col gap-28 p-6 border-1 border-midGrey rounded-xl sm:rounded-4xl lg:rounded-[4rem] mx-auto'>
                        <section className='w-11/12 md:w-3/4 lg:w-2/3 flex flex-row gap-4 px-3 py-4 border-1 border-midGrey rounded-md mx-auto text-nowrap text-black dark:text-white'>
                            <img className='w-24 object-cover scale-3d rounded-md' src={profile.pfp} alt="A photo of me" />

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col">
                                        <p className='text-xl'>{profile.name}</p>
                                        <p className='text-sm font-thin'>{profile.age}</p>
                                        <p className='text-sm font-thin'>{profile.location}</p>
                                    </div>

                                    <div className="flex flex-col gap-1 text-sm">
                                        <p>Currently Learning: <strong>{profile.learning}</strong></p>
                                        <p>Working On: <strong>{profile.project}</strong></p>
                                        <p>Employed At: <strong>{profile.working}</strong></p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-0.5">
                                    <a 
                                        className='w-8 p-1 rounded-full hover:bg-deepBlue'
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
                                        className='w-8 p-1.5 rounded-full hover:bg-deepBlue'
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
                                        className='w-8 p-1.5 rounded-full hover:bg-deepBlue'
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
                            <h2 className="relative text-2xl text-center"><span className='absolute left-0'>🧑‍💻</span><span className='ml-8'>Who am I?</span></h2>
                            <p className="mt-3 text-base text-pretty">My name is Dylan, and I'm a 17-year-old college student partaking in a course on Digital Production, Design and Development. I am passionate about programming and UI design. My strong area is front-end development and I mainly use React in conjunction with TailwindCSS, I can also create back-ends with databases and I have more experience with Flask in Python but I plan to learn more Express and further on Next. Apart from web development, I like working with data in Python using pandas and matplotlib to create dashboards and generate useful information. In addition to programming, I consistently go to the gym and go on long bike rides. Aside from being active, I enjoy cooking, eating, listening to music, reading, and playing games.</p>
                        </section>

                        <section className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col mx-auto text-black dark:text-white">
                            <h2 className="relative text-2xl text-center"><span className="absolute left-0">🎯</span><span className='ml-8'>What are my aspirations?</span></h2>
                            <p className="mt-3 text-base text-pretty">In the near future, I aim to become proficient in building websites that utilise a React front-end on a Flask back-end. Secondly, I would like to do the same except with an Express back-end, and then learn Next. As of now, I am unsure of what comes next after I finish college, you could say that university is the obvious answer, but an apprenticeship could be more valuable, or even going straight into a junior role. In the long term, I hope to go into a role involving data engineering or full stack development.</p>
                        </section>

                        <section className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col mx-auto text-black dark:text-white">
                            <h2 className="relative text-2xl text-center"><span className="absolute left-0">🎓</span><span className='ml-8'>My College Experience</span></h2>
                            <p className="mt-3 text-base text-pretty">I am in my second year of college and have learned the principles of front-end development such as UI/UX design, implementation via HTML, CSS, and JavaScript, and usability testing. At the end of my first year, we began looking into back-end development and I learned how to build a functional back-end in Python using Flask. I later learned how to connect it to a database using SQLite3. During my second year I have been focusing on learning React and integrating it with backends, I have mainly used Flask but my future projects will employ Express and Next.</p>
                        </section>
                    </div>
                </div>

                {/* <section className="w-3/4 sm:w-2/3 md:w-1/2 flex flex-col mx-auto sm:ml-20 md:ml-28 mt-24 sm:mt-36 text-black dark:text-white smooth-change">
                    <h2 className="z-10 text-2xl text-center sm:text-start">Who am I?</h2>
                    <p className="z-10 mt-3 text-base text-pretty">My name is Dylan, and I'm a 17-year-old college student partaking in a course on Digital Production, Design and Development. I am passionate about programming and UI design. My strong area is front-end development and I mainly use React in conjunction with TailwindCSS, I can also create back-ends with databases and I have more experience with Flask in Python but I plan to learn more Express and further on Next. Apart from web development, I like working with data in Python using pandas and matplotlib to create dashboards and generate useful information. In addition to programming, I consistently go to the gym and go on long bike rides. Aside from being active, I enjoy cooking, eating, listening to music, reading, and playing games.</p>
                </section>

                <section className="w-full flex flex-row justify-end">
                    <div className="w-3/4 sm:w-2/3 md:w-1/2 z-10 flex flex-col mx-auto sm:mr-20 md:mr-28 mt-20 sm:mt-28 text-black dark:text-white smooth-change ml-auto">
                        <h2 className="z-10 text-2xl text-center sm:text-start">What are my aspirations?</h2>
                        <p className="z-10 mt-3 text-base text-pretty">In the near future, I aim to become proficient in building websites that utilise a React front-end on a Flask back-end. Secondly, I would like to do the same except with an Express back-end, and then learn Next. As of now, I am unsure of what comes next after I finish college, you could say that university is the obvious answer, but an apprenticeship could be more valuable, or even going straight into a junior role. In the long term, I hope to go into a role involving data engineering or full stack development.</p>
                    </div>
                </section>

                <section className="w-3/4 sm:w-2/3 md:w-1/2 flex flex-col mx-auto sm:ml-20 md:ml-28 mt-20 sm:mt-28 text-black dark:text-white smooth-change">
                    <h2 className="z-10 text-2xl text-center sm:text-start">My college experience</h2>
                    <p className="z-10 mt-3 text-base text-pretty">I am in my second year of college and have learned the principles of front-end development such as UI/UX design, implementation via HTML, CSS, and JavaScript, and usability testing. At the end of my first year, we began looking into back-end development and I learned how to build a functional back-end in Python using Flask. I later learned how to connect it to a database using SQLite3. During my second year I have been focusing on learning React and integrating it with backends, I have mainly used Flask but my future projects will employ Express and Next.</p>
                </section> */}
            </main>

            <Footer />
        </div>
    );
};