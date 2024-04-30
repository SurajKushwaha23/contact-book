import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-800 py-4">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <Link href="/">
                <div className="inline-flex items-center">
                  <span className="ml-4 text-white text-lg font-bold">
                    Contact Book
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <Link
                    className="font-medium text-white hover:text-gray-200"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li className="p-5">
                  <a
                    className="font-medium text-white hover:text-gray-200"
                    href="contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
