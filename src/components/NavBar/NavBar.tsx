import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-50 p-8 bg-white">
      <div className="flex justify-between items-end">
        <Link href="/" className="text-3xl font-light">
          Mazarine
        </Link>
        <div className="flex space-x-2 sm:space-x-4 right-0">
          <Link
            href="/services"
            className={`block font-light border-blue-900 ${
              pathname == "/services" ? "border-b-2" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`block font-light border-blue-900 ${
              pathname == "/about" ? "border-b-2" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`block font-light border-blue-900 ${
              pathname == "/contact" ? "border-b-2" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};