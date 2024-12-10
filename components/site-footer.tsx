import React from "react";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-xs hover:underline underline-offset-4 text-gray-600"
      aria-label={children?.toString()}
    >
      {children}
    </a>
  );

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-6 w-full px-4 md:px-6 border-t border-gray-200">
      {/* Copyright Information */}
      <p className="text-xs text-gray-500 text-center sm:text-left">
        © {currentYear} Smart Metal System. All rights reserved.
      </p>

      {/* Footer Navigation */}
      <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
        <FooterLink href="#terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="#privacy-policy">Privacy Policy</FooterLink>
      </nav>
    </footer>
  );
};

export default SiteFooter;
