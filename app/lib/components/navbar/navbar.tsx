"use client";

import Link from "next/link";
import { IoIosLink } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="w-screen mb-5 p-3 flex flex-row justify-between shadow-xl">
        <div
          className="flex flex-row items-center gap-1 mr-1 cursor-pointer"
        >
          <IoIosLink></IoIosLink>
          <h1 className="text-sm md:text-base lg:text-lg font-semibold">
            UrlShorten
          </h1>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div>
            <Link href="/login">
              <button
                type="button"
                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-2 py-2 lg:px-4 md:px-4 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link href="/singup">
              <button
                type="button"
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-2 py-2 lg:px-4 md:px-4 text-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-purple-800"
              >
                Singup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
