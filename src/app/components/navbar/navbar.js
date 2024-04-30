"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="relative w-full bg-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="inline-flex items-center space-x-2">
              <span className="font-bold text-2xl text-red-800 rounded-full p-2">
                Contact Book
              </span>
            </div>
          </Link>
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="rounded-md bg-gray-200 mx-2 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Stated Today
            </Link>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold text-2xl text-red-800 rounded-full p-2">
                        Contact Book
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                  >
                    Get Stated Today
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
