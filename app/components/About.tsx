import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Quest Global",
    position: "Software Engineer - Full-time",
    startDate: "Jul 2022 ",
    endDate: "Present",
  },
  {
    company: "Telus International",
    position: "Application Development Associate - Full-time",
    startDate: "June 2020",
    endDate: "Jul 2022",
  },
];

export default function About() {
  return (
    <div className=" ">
      <h3 className="md:text-4xl md:ml-0 ml-4 text-xl text-white font-semibold mb-12 md:text-center text-start md:mt-48 mt-20">
        About me
      </h3>
      <motion.div
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
        className="flex md:justify-center md:ml-0  md:items-center items-start flex-col "
      >
        <div className="bg-gray-900 p-6 md:mx-0 mx-4 rounded-lg lg:w-[50%] w-[90%]   mb-8 ">
          <p className="gray md:text-lg text-sm">
            As a dedicated software engineer, I bring a strong problem-solving
            mindset and technical proficiency to every project. With hands-on
            experience in Full-stack Engineering, I excel in collaborative
            environments.
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            With a passion for frontend development, I&apos;ve dedicated my
            efforts to crafting seamless and visually stunning user interfaces
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            Let&apos;s connect and discuss how my skills can contribute to the
            success of your projects
          </p>
          <p className="gray pt-4 pb-4 md:text-lg text-sm">
            I build awesome products using:
          </p>
          <ul className="grid grid-cols-3 gap-2">
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Golang</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm"> Docker</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Kubernetes</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">PostgreSQL</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">AWS</p>
            </li>
            <li className="flex items-center">
              <span className="text-[#607b96] mr-2">*</span>
              <p className="text-1 md:text-lg text-sm">Redis</p>
            </li>
          </ul>
          <span className="flex gap-2 pt-4">
            <p className="gray md:text-base text-sm">Others:</p>
            <p className="text-1 md:text-base text-sm ">
              Git • Python • Bash • CI/CD • Github Actions • C • C++ • 
              Linux
            </p>
          </span>
        </div>
      </motion.div>

      <motion.div
        className=""
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
      >
      <ExperienceTimeline experiences={experiences} totalYears={4} />
      </motion.div>
    </div>
  );
}
