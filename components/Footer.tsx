import Link from "next/link";
import { AiOutlineX, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border text-muted-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold text-body-text font-sora">Banas AI</p>
            <p className="text-sm mt-1 font-inter">Banas Intelligence &amp; Physical AI</p>
            <p className="text-xs mt-2 text-muted-text font-inter">
              Rooted in farming. Operating between Dublin and Karnataka (Bengaluru).
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 font-inter">
            <Link href="/" className="hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/#ecosystem" className="hover:text-primary transition-colors text-sm">
              Ecosystem
            </Link>
            <a href="https://banas-intel-api-1007077428197.asia-south1.run.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">
              Banas Intelligence
            </a>
            <Link href="/contact" className="hover:text-primary transition-colors text-sm">
              Contact
            </Link>
            <a href="mailto:contact@banas-ai.com" className="hover:text-primary transition-colors text-sm">
              contact@banas-ai.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/banasai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <AiOutlineLinkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/banas_ai" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="hover:text-primary transition-colors">
              <AiOutlineX className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm font-inter">
          <p>&copy; {currentYear} Banas AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;