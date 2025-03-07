import { useEffect, useRef } from "react";

import Header from "../layout/Header.tsx";
import AbilitiesSection from "../layout/Abilities.tsx";
import Footer from "../layout/Footer.tsx";

import typingEffect from "../../utils/slowType.ts";

export default function Home() {
    const effectRan = useRef(false);
    const typingRef = useRef(null);

    useEffect(() => {
        if (!effectRan.current && typingRef.current) {
            typingEffect(typingRef.current);
            effectRan.current = true;
        }
    }, []);

    return (
        <div className="flex flex-col">
            <title>Home | Dylan Bullock | Software Developer</title>

            <Header />

            <div className="fixed top-0 dot-grid"></div>

            <div
                className="h-full w-fit z-10 ml-7 mt-56 sm:mt-56 md:mt-56 xl:mt-64 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white select-none smooth-change">
                <h2>Hey there, my name's <span className="text-midBlue">Dylan.</span></h2>
                <h2>I'm a <span
                    id="slow-type-section"
                    className="bg-gradient-to-r from-midBlue to-midPurple bg-clip-text font-bold text-transparent"
                    ref={typingRef} />
                </h2>
                <h2>based in the <span className="text-darkBlue font-bold">United Kingdom</span></h2>
            </div>

            <a
                id="cv-btn"
                className="w-fit self-center sm:self-start p-4 ml-7 mt-28 rounded-full text-sm sm:text-lg text-almostWhite dark:text-onyxBlack font-bold font-fira-code"
                href="/media/pdfs/CV-Dylan-Bullock.pdf"
                target="_blank"
                download="CV-Dylan-Bullock.pdf">
                Download CV
            </a>

            <AbilitiesSection />
            <Footer />
        </div>
    );
};