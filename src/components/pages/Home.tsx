import { useEffect, useRef } from "react";

import Header from "../layout/Header.tsx";
import AbilitiesSection from "../layout/Abilities.tsx";
import Footer from "../layout/Footer.tsx";

import typingEffect from "../../utils/slowType.ts";

export default function Home() {
    const effectRan = useRef(false);
    const typingRef = useRef(null);
    const downArrowRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (!effectRan.current && typingRef.current) {
            typingEffect(typingRef.current);
            effectRan.current = true;
        };

        const handleScroll = () => {
            if(downArrowRef.current) {
                downArrowRef.current.style.opacity = window.scrollY > 50 ? '0' : '1';
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col">
            <title>Home | Dylan Bullock | Software Developer</title>

            <Header />

            <div className="h-screen -z-10 fixed dot-grid"></div>

            <div className="h-full w-fit z-10 ml-7 mt-56 sm:mt-56 md:mt-56 xl:mt-64 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white select-none smooth-change">
                <h2>Hey there, my name's <span className="text-midBlue">Dylan.</span></h2>
                <h2>I'm a <span
                    id="slow-type-section"
                    className="bg-gradient-to-r from-midBlue to-midPurple bg-clip-text font-bold text-transparent"
                    ref={typingRef} />
                </h2>
                <h2>based in the <span className="text-darkBlue font-bold">United Kingdom</span></h2>
            </div>

            <div className="w-fit z-10 flex flex-row gap-7 mx-auto sm:mx-0 sm:pl-7 mt-28 text-nowrap text-onyxBlack dark:text-white">
                <a
                    id="primary-cta"
                    className="w-fit flex flex-row gap-1 items-center p-4 rounded-xl text-sm sm:text-lg font-bold font-fira-code"
                    href="mailto:dylanbullock.dev@gmail.com"
                    rel="noreferrer"
                    target="_blank">
                    <p>Let's Talk</p>
                    <svg className="w-7 fill-white" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
                    </svg>
                </a>

                <a
                    className="w-fit group flex flex-row gap-1 p-4 border-2 border-midPurple hover:border-darkPurple rounded-xl backdrop-blur-sm text-sm sm:text-lg font-bold font-fira-code hover:scale-120 transition-all duration-300"
                    href="/media/pdfs/CV-Dylan-Bullock.pdf"
                    target="_blank"
                    download="CV-Dylan-Bullock.pdf">
                    <svg className="w-7 fill-white group-hover:fill-darkPurple transition-all duration-initial" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                    </svg>
                    <p className="group-hover:text-darkPurple transition-all duration-300">Download CV</p>
                </a>
            </div>

            <a
                ref={downArrowRef}
                className="w-20 relative mx-auto mt-8 bg-radial from-midGrey/50 dark:from-darkGrey from-0% via-midPurple/40 dark:via-deepBlue via-30% to-transparent to-70% hover:scale-110 transition-all duration-500 cursor-pointer animate-slow-bouce"
                href="#abilities-sect">
                <svg className="fill-darkGrey dark:fill-midGrey" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                </svg>
            </a>

            <AbilitiesSection />
            <Footer />
        </div>
    );
};