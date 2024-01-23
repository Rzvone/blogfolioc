"use client";
import React from "react";
import Particle from "../particles/Particle";
import TextEffect from "../textEffect/TextEffect";
import {
  ArrowDownTrayIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumePath = "/resume/RazvanBobonea.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "RazvanBobonea.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col mt-[5vh] px-10 select-none">
      <Particle />
      <div className="grid-cols-1 grid lg:grid-cols-2 gap-[3rem] md:mx-auto mt-10 2xs:ml-[-80px] 2xs:mr-[-90px] 3xs:ml-[-80px] 3xs:mr-[-90px] xs:ml-[-80px] xs:mr-[-90px]">
        <div className="z-[100] mx-auto">
          <h1 className="text-[35px]">Hello, I&apos;m Raz</h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-gray-400">
            Hello, I&apos;m Razvan, a passionate Full Stack Developer with a
            keen eye for creating innovative and efficient solutions. With a
            solid foundation in both front-end and back-end technologies, I
            specialize in crafting dynamic and responsive web applications. My
            commitment to clean, maintainable code and a user-centric approach
            sets the stage for delivering seamless digital experiences. Explore
            my portfolio to witness the fusion of creativity and technical
            expertise, as I continue to push the boundaries of what&apos;s
            possible in the world of web development.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              onClick={handleDownloadResume}
              className="
                  px-[2rem]
                  hover:bg-green-400
                  transition-all
                  duration-300
                  py-[1rem]
                  text-[1.125rem]
                  font-bold
                  uppercase
                  bg-[#55e6a5]
                  text-black
                  flex
                  items-center
                  space-x-3
                  rounded-md
                "
            >
              <p>Download Resume</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              onClick={() => window.open("https://wa.me/40756168137")}
              className="
              px-[2rem]
              hover:bg-green-400
              transition-all
              duration-300
              py-[1rem]
              text-[1.125rem]
              font-bold
              uppercase
              bg-[#55e6a5]
              text-black
              flex
              items-center
              space-x-3
              rounded-md
              "
            >
              <p>Message Me</p>
              <ChatBubbleOvalLeftEllipsisIcon className="w-[1.6rem] h-[1.7rem] text-white" />
            </button>
          </div>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] md:h-[500px] md:w-[500px] mx-auto relative">
          <Image
            src="/images/developer.webp"
            alt="developer"
            objectFit="cover"
            className="rounded-full"
            layout="fill"
            draggable={false}
          />
        </div>
      </div>
      <div className="grid-cols-1 grid lg:grid-cols-2 gap-[3rem] md:mx-auto mt-10 2xs:ml-[-80px] 2xs:mr-[-90px] 3xs:ml-[-80px] 3xs:mr-[-90px] xs:ml-[-80px] xs:mr-[-90px]">
        <h1>This will be a Blogfolio where I will document my journey to becoming a web dev!!!</h1>
      </div>
    </div>
  );
};

export default Hero;
