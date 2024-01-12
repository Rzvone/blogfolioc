import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-[50px] flex gap-[50px] items-center">
      <div className="flex-1 h-[350px] relative">
        <Image
          src="/images/images/code.jpg"
          alt="code"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[20px]">
        <div className="details">
            <span className="text-gray-600">11.11.2024 - </span>
            <span className="text-red-700 font-bold">Frontend</span>
        </div>
        <Link href='/'>
            <h1>The FrontEnd</h1>
        </Link>
        <p className="text-[18px] font-semibold text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure provident corrupti aperiam 
            optio ratione modi ipsam autem quidem ex 
            aliquam placeat culpa, amet eveniet. Non perspiciatis consequatur saepe cumque distinctio.
        </p>
        <Link href='/' className="bg-slate-600 w-fit p-1 rounded-lg">Read more</Link>
        <div className="border border-[#6e0a1e] w-full px-2 py-0"></div>
      </div>
    </div>
  );
};

export default Card;
