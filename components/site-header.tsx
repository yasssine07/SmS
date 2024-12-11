import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, MenuIcon, XIcon } from "lucide-react";

// Define types for product and header props
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface HeaderProps {
  setCurrentPage: (page: string) => void;
  cart: Product[];
  setCart: (cart: Product[]) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  setCurrentPage,
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Navigation links component
  const NavigationLinks = () => (
    <>
      <a
        className="transition-colors hover:text-blue-600 text-gray-700"
        href="/"
        onClick={() => setCurrentPage("landing")}
      >
        Accueil
      </a>
      <a
        className="transition-colors hover:text-blue-600 text-gray-700"
        href="#service"
      >
        Services
      </a>
      <a
        className="transition-colors hover:text-blue-600 text-gray-700"
        href="#photo"
      >
        Réalisations
      </a>
      <a
        className="transition-colors hover:text-blue-600 text-gray-700"
        href="#logo"
      >
        Références
      </a>
      <a
        className="transition-colors hover:text-blue-600 text-gray-700"
        href="#contact"
      >
        Contact
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            onClick={() => setCurrentPage("landing")}
            className="flex items-center space-x-2"
          >
            <img
              src="/logoSmS.png"
              alt="Smart Metal System Logo"
              className="h-10"
            />
            <span className="hidden font-bold text-lg md:inline" style={{ color: "#003399" }}>
              Smart <span style={{ color: "#ff0000" }}>Metal</span> System
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavigationLinks />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            className="flex items-center justify-center rounded-lg bg-blue-900 text-white h-10 w-10"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            <span className="hidden font-bold text-lg md:inline" style={{ color: "#003399" }}>
              Smart <span style={{ color: "#ff0000" }}>Metal</span> System
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 md:hidden">
            <div className="fixed left-0 top-0 bottom-0 w-3/4 max-w-xs p-6 bg-white shadow-lg">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4"
              >
                <XIcon className="h-6 w-6 text-gray-700" />
              </button>
              <div className="flex flex-col space-y-4">
                <NavigationLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
