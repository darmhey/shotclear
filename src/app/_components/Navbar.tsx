// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/shotclearLOGO.svg"
            alt="Shotclear Logo"
            width={150}
            height={40}
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/tools" className="flex items-center hover:text-gray-600">
            Tools
            <Image
              src="/ExpandArrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="ml-1"
            />
          </Link>
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About Us
          </Link>
          <Link href="/pricing" className="hover:text-gray-600">
            Pricing
          </Link>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition">
          Sign Up / Log In
        </button>
      </div>
    </nav>
  );
}
