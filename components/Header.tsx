import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_COMMUNITY_URL } from "./community";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-3">
        <div className="flex items-center">
          <Link href="/" aria-label="Banas AI home">
            <Image
              src="/banas_logo.jpg"
              alt="Banas AI"
              width={180}
              height={60}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-y-2">
          <ul className="flex flex-wrap justify-center space-x-1 mr-4">
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
                href="/#ecosystem"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Ecosystem
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://banas-intel-api-1007077428197.asia-south1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Banas Intelligence
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-body-text px-4 py-2 rounded-button hover:bg-background transition-colors font-inter"
              >
                Community
              </a>
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
            Register Interest
          </Link>
        </nav>
      </div>
    </header>
  );
}