import { toast } from "react-hot-toast";
export default function Index() {
  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl  text-center">
            <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Save your{" "}
              <span className="border-b-8 border-yellow-300">Contact</span>{" "}
              without loosing it.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-md text-gray-600 md:mt-10 lg:text-xl">
              Contact Book is a tool used to store and organize information
              about people and organizations that an individual or a business
              may need to contact. It typically includes names, phone numbers,
              email addresses, physical addresses, and other relevant details.
            </p>

            <button
              type="button"
              className="mt-8 rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get start today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
