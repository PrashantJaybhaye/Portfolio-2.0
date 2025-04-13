import {words} from "../constants/index.js";
import Button from "../components/button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import  { useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import ShowCaseSection from "./ShowCaseSection.jsx";

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },{
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'Power2.easeInOut',
            })
    },[]);

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src='/images/bg.png' alt="background"/>
            </div>
                <div className="hero-layout">
                    {/*LEFT: HERO CONTENT*/}
                    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                        <div className="flex flex-col gap-7">
                            <div className="hero-text">
                                <h1>
                                    Shaping
                                    <span className="slide">
                                        <span className="wrapper">
                                            {words.map((words)=> (
                                                <span key={words.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                    <img
                                                    src={words.imgPath}
                                                    alt={words.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                    />

                                                    <span>{words.text}</span>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                <h1>Building My Path in</h1>
                                <h1>Full Stack Development</h1>
                            </div>
                                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                                    I'm Prashant, a passionate full stack student developer eager <br/> to learn and create meaningful projects.
                                </p>
                                <Button
                                    className="md:w-80 md:h-16 w-60 h-12"
                                    id="button"
                                    text="Learn More"
                                />
                        </div>
                    </header>

                    {/*RIGHT: 3D model*/}

                    <figure>
                        <div className="hero-3d-layout ">
                            <HeroExperience/>
                        </div>
                    </figure>
                </div>

            <AnimatedCounter />
        </section>
    )
}
export default Hero
