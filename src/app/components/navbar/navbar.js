"use client";
import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userdata, setUserData] = React.useState("null");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/v1/contact-book/user/logout");
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [userdata]);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/v1/contact-book/user/user-profile");
      console.log(res);
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
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
            {userdata == "null" ? (
              <>
                <Link
                  href="/login"
                  className="rounded-md bg-gray-200 mx-2 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-md bg-rose-800 mx-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                >
                  Get Started Today
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <div className="bg-rose-800 flex justify-center items-center text-white h-10 w-10 rounded-full text-2xl font-bold">
                    {userdata.data.fullname.charAt(0)}
                  </div>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {userdata.data.fullname}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {userdata.data.email}
                    </span>
                  </span>
                  <button
                    type="button"
                    className="rounded-md bg-rose-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
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
                  <div>
                    <Link
                      href="/login"
                      className="mt-4 text-center block mx-auto rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/sign-up"
                      className="mt-4 text-center block mx-auto rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                    >
                      Get Stated Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
