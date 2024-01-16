import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="catContainer select-none md:mx-auto 2xs:ml-[-80px] 2xs:mr-[-90px] 3xs:ml-[-80px] 3xs:mr-[-90px] xs:ml-[-80px] xs:mr-[-90px]">
      <h1 className="catTitle">Popular Categories</h1>
      <div className="categories">
        <Link href="/blog?cat=style" className="category font-bold bg-pink-700 w-full z-[1000] hover:bg-pink-400 hover:text-black"  draggable={false}>
          <Image
            src="/images/images/style.png"
            alt="style"
            width={32}
            height={32}
            className="catImage"
            draggable={false}
          />
          frontend
        </Link>
        <Link href="/blog?cat=style" className="category font-bold bg-yellow-700 w-full z-[1000] hover:bg-yellow-400 hover:text-black" draggable={false}>
          <Image
            src="/images/images/style.png"
            alt="style"
            width={32}
            height={32}
            className="catImage"
            draggable={false}
          />
          backend
        </Link>
        <Link href="/blog?cat=style" className="category font-bold bg-blue-700 w-full z-[1000] hover:bg-blue-400 hover:text-black" draggable={false}>
          <Image
            src="/images/images/style.png"
            alt="style"
            width={32}
            height={32}
            className="catImage"
            draggable={false}
          />devops
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
