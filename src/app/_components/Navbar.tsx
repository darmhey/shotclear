// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#FCFEF8] py-4 font-space-grotesk uppercase border border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/shotclearLOGO.svg"
              alt="Shotclear Logo"
              width={210}
              height={40}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 font-[Space_Grotesk] text-sm font-medium">
          <Link href="/tools" className="flex items-center hover:text-gray-600">
            Tools
            <span>
              <Image
                src="/ExpandArrow.svg"
                alt="Arrow"
                width={12}
                height={14}
                className="ml-1"
              />
            </span>
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
        <button className="bg-black text-white px-6 py-4 font-bold hover:bg-gray-800 transition uppercase font-[Space_Grotesk] text-sm ">
          Sign Up | Log In
        </button>
      </div>
    </nav>
  );
}
