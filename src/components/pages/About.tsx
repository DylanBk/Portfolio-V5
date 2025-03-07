import Header from '../layout/Header.tsx';
import Footer from '../layout/Footer.tsx'

import avatar from '../../assets/images/avatar.svg'

export default function About() {
    return (
        <div>
            <title>About | Dylan Bullock | Software Developer</title>

            <Header />

            <main>
                <div className="w-fit flex flex-row items-end gap-5 pb-4 border-b-gradient mx-auto sm:ml-20 md:ml-28 mt-52 sm:mt-56 text-nowrap smooth-change">
                    <img
                        className="w-20 sm:w-24 md:w-32"
                        src={avatar}
                        alt="avatar icon" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-black dark:text-white">About Me</h1>
                </div>

                <section className="w-3/4 sm:w-2/3 md:w-1/2 flex flex-col mx-auto sm:ml-20 md:ml-28 mt-24 sm:mt-36 text-black dark:text-white smooth-change">
                    <h2 className="text-2xl text-center sm:text-start">Who am I?</h2>
                    <p className="mt-3 text-justify sm:text-left text-base text-pretty">My name is Dylan, and I'm a 17-year-old college student partaking in a course on Digital Production, Design and Development. I am passionate about programming and UI design. My strong area is front-end development and I mainly use React in conjunction with TailwindCSS, I can also create back-ends with databases and I have more experience with Flask in Python but I plan to learn more Express and further on Next. Apart from web development, I like working with data in Python using pandas and matplotlib to create dashboards and generate useful information. In addition to programming, I consistently go to the gym and go on long bike rides. Aside from being active, I enjoy cooking, eating, listening to music, reading, and playing games.</p>
                </section>

                <section className="w-full flex flex-row justify-end">
                    <div className="w-3/4 sm:w-2/3 md:w-1/2 flex flex-col mx-auto sm:mr-20 md:mr-28 mt-20 sm:mt-28 text-black dark:text-white smooth-change ml-auto">
                        <h2 className="text-2xl text-center sm:text-start">What are my aspirations?</h2>
                        <p className="mt-3 text-justify sm:text-left text-base text-pretty">In the near future, I aim to become proficient in building websites that utilise a React front-end on a Flask back-end. Secondly, I would like to do the same except with an Express back-end, and then learn Next. As of now, I am unsure of what comes next after I finish college, you could say that university is the obvious answer, but an apprenticeship could be more valuable, or even going straight into a junior role. In the long term, I hope to go into a role involving data engineering or full stack development.</p>
                    </div>
                </section>

                <section className="w-3/4 sm:w-2/3 md:w-1/2 flex flex-col mx-auto sm:ml-20 md:ml-28 mt-20 sm:mt-28 text-black dark:text-white smooth-change">
                    <h2 className="text-2xl text-center sm:text-start">My college experience</h2>
                    <p className="mt-3 text-justify sm:text-left text-base text-pretty">I am in my second year of college and have learned the principles of front-end development such as UI/UX design, implementation via HTML, CSS, and JavaScript, and usability testing. At the end of my first year, we began looking into back-end development and I learned how to build a functional back-end in Python using Flask. I later learned how to connect it to a database using SQLite3. During my second year I have been focusing on learning React and integrating it with backends, I have mainly used Flask but my future projects will employ Express and Next.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
};