import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <div className="text-center">
        <p className="text-9xl font-bold text-rose-800">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you are looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link>
          <Link
            href="/contact-us"
            className="rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
