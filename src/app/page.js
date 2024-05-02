import { toast } from "react-hot-toast";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <section className="lg:py-24 py-8 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl  text-center">
            <h2 className="mt-8 text-6xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Save your{" "}
              <span className="border-b-8 border-rose-700">Contact</span>{" "}
              without loosing it.
            </h2>
            <p className="mx-auto pb-6 max-w-4xl text-lg text-gray-600 md:mt-10 lg:text-xl text-justify">
              Contact Book is a tool used to store and organize information
              about people and organizations that an individual or a business
              may need to contact. It typically includes names, phone numbers,
              email addresses, physical addresses, and other relevant details.
            </p>

            <Link
              href="/sign-up"
              className="mt-8 rounded-md bg-rose-800 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get start today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
