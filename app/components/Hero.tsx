import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <div className="">
      <div className=" lg:flex lg:items-center justify-center items-center flex-col flex lg:flex-row lg:justify-around lg:mt-48 mt-20  ">
        <div className="">
          <p className="text lg:mx-0 mx-4 md:text-6xl text-2xl  font-semibold max-w-prose mb-8  ">
            Hello, I&apos;m Srinivas Poturi
          </p>
          <p className="lg:mx-0 mx-4 text-white mb-8 md:text-6xl text-2xl font-semibold  ">
            Software Engineer
          </p>
          <p className=" max-w-prose gray font-medium lg:text-lg text-sm mb-8 ">
            Am a skilled backend developer with a focus on building cloud-native applications using Golang, with experience across a variety of frameworks. 
            Specializing in microservices architecture, REST API development, and distributed systems,
            I have contributed to scalable and efficient services in cloud environments. 
            {/* With expertise in creating reliable solutions for modern cloud infrastructure, my work is driven by a deep understanding of cloud-native principles and the use of cutting-edge tools. */}
          </p>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <a download href="/Srinivas_poturi_CV.pdf">
              <button className="download-button button lg:mx-0  lg:mb-0 mb-12  ">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="container-profile lg:mb-0 md:mb-12">
          {/* <div className="profile-glow-2 "></div> */}
          {/* <div className="profile-glow"></div> */}
          {/* <motion.div
            // initial={false}
            // animate={
            //   imageLoaded
            //     ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            //     : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            // }
            // transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/photo.jpg"
              alt="Srinivas - Software Developer"
              width={301}
              height={301}
              blurDataURL="/photo.jpg"
              onLoad={() => setImageLoaded(true)}
              quality={100}
              priority={true}
              placeholder="blur"
              className="hover:scale-[1.025] transition-all duration-300 ease-in  profile-image filter grayscale"
            />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
