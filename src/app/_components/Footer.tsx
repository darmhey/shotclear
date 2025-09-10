// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <Image
              src="/shotclearLOGO.svg"
              alt="Shotclear Logo"
              width={150}
              height={40}
            />
            <p className="text-sm mt-2">© 2025 All Rights Reserved</p>
            <div className="flex items-center mt-2">
              <Image
                src="/message.svg"
                alt="Support"
                width={20}
                height={20}
                className="mr-2"
              />
              <a
                href="mailto:support@shotclear.com"
                className="text-sm hover:underline"
              >
                @ support@shotclear.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0">
            <div>
              <h4 className="font-bold mb-2">Product</h4>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/how-it-works">How it works</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Community</h4>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/linkedin">LinkedIn</Link>
                </li>
                <li>
                  <Link href="/youtube">YouTube</Link>
                </li>
                <li>
                  <Link href="/x">X</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
