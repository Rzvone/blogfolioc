import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store", // delete this only show for demo
  })

  if(!res.ok) {
    throw new Error("Fetching went wrong")
  }

  return res.json()
}



const CategoryList = async () => {

  const data = await getData()

  // console.log(data.categories.map((cat: any) => cat.img)) keeping this as a reference cause i forget how to map through an array of objects
  
  return (
    <div className="catContainer select-none md:mx-auto 2xs:ml-[-80px] 2xs:mr-[-90px] 3xs:ml-[-80px] 3xs:mr-[-90px] xs:ml-[-80px] xs:mr-[-90px]">
      <h1 className="catTitle">Popular Categories</h1>
      <div className="categories">
        {data?.categories.map((cat: any) => (
                  <Link href="/blog?cat=style"
                    className={`
                    category 
                    font-bold  
                    z-[1000] 
                    w-full
                    hover:text-black
                    rounded-lg
                    ${cat.slug === 'frontend' ? 'bg-pink-700 hover:bg-pink-400' : ''}
                    ${cat.slug === 'backend' ? 'bg-yellow-700 hover:bg-yellow-400' : ''}
                    ${cat.slug === 'devops' ? 'bg-blue-700 hover:bg-blue-400' : ''}
                    `}  draggable={false} key={cat.id}>
                  {/* <Image
                    src={cat.img}
                    alt="style"
                    width={32}
                    height={32}
                    className="catImage"
                    draggable={false}
                  /> */}
                  {cat.slug}
                </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
