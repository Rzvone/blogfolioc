import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="catContainer select-none">
      <h1 className="catTitle">Popular Categories</h1>
      <div className="categories">
        <Link href="/blog?cat=style" className="category bg-pink-700 w-full z-[1000]"  draggable={false}>
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
        <Link href="/blog?cat=style" className="category bg-yellow-700 w-full z-[1000]" draggable={false}>
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
        <Link href="/blog?cat=style" className="category bg-blue-700 w-full z-[1000]" draggable={false}>
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
