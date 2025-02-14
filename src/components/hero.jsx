import { bio } from "../const";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroThree from "../models/herothree";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const adjustThreeSize = () => {
        return screenWidth < 768 ? [0.15, 0.15, 0.15] : [0.25, 0.25, 0.25];
    };

    const ThreeScale = adjustThreeSize();

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap items-center justify-center lg:flex-nowrap h-[500px]">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-6 text-5xl font-thin tracking-tight lg:text-7xl"
                    >
                        Abhinav Singh
                    </motion.h1>

                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                    >
                        <Typewriter
                            words={["Web Developer", "Java Developer", "Graphic Designer"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </motion.span>

                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-4 max-w-xl py-4 font-light tracking-tighter"
                    >
                        {bio}
                    </motion.p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
                    <Canvas
                        className="w-full h-full"
                        camera={{ position: [3, 2, 7], fov: 50, near: 0.1, far: 1000 }}
                    >
                        <Suspense fallback={null}>
                            <directionalLight position={[5, 5, 5]} intensity={1} />
                            <ambientLight intensity={0.7} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <spotLight position={[0, 5, 5]} intensity={0.8} />
                            <hemisphereLight intensity={0.5} />
                            <HeroThree scale={ThreeScale} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default Hero;
