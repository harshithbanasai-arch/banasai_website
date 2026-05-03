import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/banas_logo.jpg"
              alt="Banas AI"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-1 mr-4">
            <li>
              <Link
                href="/"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#datasets"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Datasets
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}