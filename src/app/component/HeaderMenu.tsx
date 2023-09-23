"use client";

import Link from "next/link";

export const HeaderMenu = () => {
  function onClickCapture() {
    document.documentElement.style.position = "";
    document.getElementById("side-menu")?.click();
  }

  return (
    <ul
      onClickCapture={onClickCapture}
      className="w-full h-full text-center flex flex-col mt-4 text-outer-space uppercase text-sm font-medium lg:flex-row lg:space-x-4 lg:mt-0"
    >
      <li className="w-full text-center">
        <a
          href="/"
          className="w-[150px] my-2 mx-auto h-[27px] lg:w-[118px] rounded-full hover:border-[1px] transition-all before:block before:bottom-[-2px] before:w-[80%] before:h-[2px]  before:absolute before:left-[50%] before:translate-x-[-50%] before:bg-cultured  after:block after:top-[-2px] after:w-[80%] after:h-[2px] relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bg-cultured  hover:text-myrtle-green hover:border-myrtle-green flex justify-center items-center"
        >
          Home
        </a>
      </li>
      <li className="w-full text-center">
        <a
          href="/#work-section"
          className="w-[150px] my-2 mx-auto h-[27px] lg:w-[118px] rounded-full hover:border-[1px] transition-all before:block before:bottom-[-2px] before:w-[80%] before:h-[2px]  before:absolute before:left-[50%] before:translate-x-[-50%] before:bg-cultured  after:block after:top-[-2px] after:w-[80%] after:h-[2px] relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bg-cultured  hover:text-myrtle-green hover:border-myrtle-green flex justify-center items-center"
        >
          Works
        </a>
      </li>
      <li className="w-full text-center">
        <a
          href="/#experience-section"
          className="w-[150px] my-2 mx-auto h-[27px] lg:w-[118px] rounded-full hover:border-[1px] transition-all before:block before:bottom-[-2px] before:w-[80%] before:h-[2px]  before:absolute before:left-[50%] before:translate-x-[-50%] before:bg-cultured  after:block after:top-[-2px] after:w-[80%] after:h-[2px] relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bg-cultured  hover:text-myrtle-green hover:border-myrtle-green flex justify-center items-center"
        >
          Experience
        </a>
      </li>
      <li className="w-full text-center">
        <Link
          href="/posts"
          className="w-[150px] my-2 mx-auto h-[27px] lg:w-[118px] rounded-full hover:border-[1px] transition-all before:block before:bottom-[-2px] before:w-[80%] before:h-[2px]  before:absolute before:left-[50%] before:translate-x-[-50%] before:bg-cultured  after:block after:top-[-2px] after:w-[80%] after:h-[2px] relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bg-cultured  hover:text-myrtle-green hover:border-myrtle-green flex justify-center items-center"
        >
          Posts
        </Link>
      </li>
    </ul>
  );
};
