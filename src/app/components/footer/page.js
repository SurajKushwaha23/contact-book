import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-800">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex sm:flex-row items-center justify-between">
            <Link href="/">
              <span className="text-white text-lg font-bold">Contact Book</span>
            </Link>

            <div className="w-auto p-4">
              <ul className=" flex items-center">
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
