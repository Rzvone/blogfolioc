import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({cheie, item}: any) => {
  return (
    <div className="mb-[50px] flex gap-[50px] items-center select-none" key={cheie}>
      <div className="flex-2 relative lg:hidden sm:hidden xs:hidden h-[350px] md:hidden xl:block 2xl:block">
        <Image
          src="/images/images/code.jpg"
          alt="code"
          width={400}
          height={400}
          className="object-cover md:hidden lg:block xl:block 2xl:block sm:hidden xs:hidden 2xs:hidden 3xs:hidden"
          draggable={false}
        />
      </div>
      <div className="flex-1 flex flex-col gap-[20px]">
        <div className="details">
            <span className="text-gray-600">{item.createdAt} - </span>
            <span className="text-red-700 font-bold">{item.catSlug.toUpperCase()}</span>
        </div>
        <Link href='/'>
            <h1>{item.title}</h1>
        </Link>
        <p className="text-[18px] font-semibold text-gray-300">
            {item.desc}
        </p>
        <Link href='/' className="bg-slate-600 font-bold w-fit p-2 rounded-lg hover:bg-slate-400 hover:text-black">Read more</Link>
        <div className="border border-[#6e0a1e] w-full px-2 py-0"></div>
      </div>
    </div>
  );
};

export default Card;
