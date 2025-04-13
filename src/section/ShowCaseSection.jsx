import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="project" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                FunVerse is a dynamic web application designed for seamless movie discovery.
                                <a href="https://funverse-sigma.vercel.app/" target="_blank" className="text-[#5E00FF] p-2 text-xl md:text-3xl ">
                                    🔗<button className="underline">Demo</button>
                                </a>
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Instant Search: Real-time results powered by APIs like TMDB. Sort by genre, release year, rating, or popularity.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/project2.png"
                                    alt="Library Management Platform"
                                />
                            </div>
                            <h2>IPhone 16 Pro Website clone.
                                <a href="https://iphone-prashant.vercel.app/" target="_blank" className="text-[#5E00FF] p-2 text-xl md:text-2xl">
                                    🔗<button className="underline">Demo</button>
                                </a>
                            </h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/project3.png" alt="YC Directory App" />
                            </div>
                            <h2>Coca-cola Showcase Landing Page.
                                <a href="https://cokacolalandingpage.vercel.app/" target="_blank" className="text-[#5E00FF] p-2 text-xl md:text-2xl">
                                    🔗<button className="underline">Demo</button>
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;