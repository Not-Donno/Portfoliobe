import { RiJavaFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { SiPython, SiC, SiSpring, SiLua, SiReact, SiTypescript } from "react-icons/si";
import {FaNodeJs} from "react-icons/fa"
import { motion, transform } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
})
const Tech = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technology</motion.h1>
            <motion.div
            whileInView ={{opacity:1, x: 0}}
            initial ={{opacity: 0, x: -100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavaFill className="text-7xl" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiFillHtml5 className="text-7xl text-orange-600" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3Full className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpring className="text-7xl text-green-600" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLua className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiReact className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-yellow-300" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tech;
