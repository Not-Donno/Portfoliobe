export const bio = "I’m a self-taught programmer and a Bachelor’s in Information Technology (BIT) student with a strong foundation in web development and software design. I have hands-on experience in HTML, CSS, JavaScript, React, Java, and Python, enabling me to create interactive, user-focused websites and applications.With a knack for problem-solving and a passion for technology, I’m eager to continue expanding my skills and contributing to impactful projects.";
export const mainbio = "Hi, I’m Abhinav Singh, a passionate programmer and a student currently pursuing a Bachelor’s in Information Technology (BIT). I specialize in web development and software design, with proficiency in HTML, CSS, JavaScript, React, Java, and Python.\n\nI enjoy solving complex problems, creating efficient solutions, and building applications that enhance user experiences. My journey in technology has been driven by curiosity and a commitment to learning.\n\nWhen I’m not coding, I like exploring new tech trends, experimenting with personal projects, and continuously improving my skill set. I’m always excited about opportunities to collaborate on impactful projects and grow as a developer.";
import placeholder from "../assets/projectimg/placeholder.jpg"
import project1 from "../assets/projectimg/sdc.png"
import project2 from "../assets/projectimg/portfolio.png"
import project3 from "../assets/projectimg/hackthon.png"

export const PROJECTS = [
    {
        title: "Self Driving Arduino Car",
        image: project1,
        description: "An autonomous car prototype built using Arduino, equipped with ultrasonic sensors for obstacle detection and motor control for navigation. The car intelligently maneuvers around obstacles, demonstrating basic self-driving capabilities through real-time sensor feedback and decision-making algorithms.",
        technologies: ["C","C++"],
    },
    {
        title: "Portfolio Website",
        image: project2,
        description: "A modern and interactive portfolio website built using React, Three.js, and Tailwind CSS This project showcases my skills and projects with a visually engaging 3D experience, smooth animations, and a responsive design for seamless navigation across devices.",
        technologies: ["JS", "React","Tailwind","Three.JS"],
    },
    {
        title: "Hackthon Website",
        image: project3,
        description: "A dynamic and responsive website built using React, Three.js, and Tailwind CSS for a hackathon project. It features an engaging 3D design, smooth animations, and an intuitive user experience, effectively presenting the event’s theme and objectives while ensuring seamless performance across devices.",
        technologies: ["React", "Tailwind", "ThreeJs"],
    }
];
export const CONTACT = {
    address: "Kathmandu, Jorpati, Narayantar",
    phoneNo: "+977 9817288387",
    email: "abhinavgautam123456@gmail.com"
}