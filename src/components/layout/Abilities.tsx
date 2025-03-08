import Technologies from "./Technologies.tsx";

export default function AbilitiesSection() {
    return (
        <div
            id="abilities-sect"
            className="max-w-5/6 md:max-w-full z-10 flex flex-col md:flex-row gap-8 md:gap-16 py-44 mx-auto md:mx-0 md:ml-7 items-center justify-around lg:justify-center text-black dark:text-white">
            <section className="w-fit md:w-5/12 xl:w-1/2">
                <h2 className="text-2xl sm:text-4xl text-center md:text-left text-nowrap gradient-underline">What can I do?</h2>
                <p className="xl:w-5/6 mt-3 text-sm sm:text-base text-pretty">
                    As a web developer and designer, I design and build visually stunning websites with a good flow using a diverse range of technologies. I aim to create sites that are dynamic, responsive and eye-catching while maintaining their core functionality.
                    <br /><br />When designing websites, I use tools such as Figma and draw.io to sketch wireframes and make detailed page designs, to maintain consistency throughout the design I design modular components such as the buttons, links, headings, etc.
                    <br /><br />I specialise in both front-end and back-end development. In the front-end area, I can use HTML, CSS, TailwindCSS, JavaScript, JSX, and React. I prefer to use React in conjunction with Tailwind for rapid development as I can quickly create reusable components. My first programming language was Python so for the back-end I am most proficient with Flask combined with SQLite or SQLAlchemy, although I can also use Express.
                </p>
            </section>
            <Technologies />
        </div>
    );
};