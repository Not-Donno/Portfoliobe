import pfp from "../assets/img/pfp.png";
import { mainbio } from "../const";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
<h1 className="my-20 text-center text-4xl">
    <span className="bg-gradient-to-r from-gray-300 via-gray-500 to-white bg-clip-text text-transparent">About Me</span>
</h1>

            <div className="flex flex-wrap lg:flex-nowrap">
                <motion.div
                whileInView={{opacity: 1,x: 0}}
                initial={{opacity:1,x:-100}}
                transition={{dureation:0.5}}
                className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
                    <img className="rounded-2xl" src={pfp} alt="Profile" />
                </motion.div>
                <motion.div
                whileInView={{opacity: 1,x: 0}}
                initial={{opacity:1,x:100}}
                transition={{dureation:0.5}}
                className="w-full lg:w-1/2 flex items-center">
                    <p className="my-2 max-w-xl py-6 lg:py-0 text-center lg:text-left font-light">
                        {mainbio}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
