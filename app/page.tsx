"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyPhotoSlider from "@/components/company-photo-slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, Download, MapPin, Mail, Phone, Facebook,  } from "lucide-react";
import CompanyLogoSection from "@/components/company-logo";
import ServicesSection from "@/components/services-section";
import SiteFooter from "@/components/site-footer";
import ProductPage from "@/components/product-section";
import Header from "@/components/site-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FaMapPin, FaEnvelope, FaPhone, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

// Types for Product
type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

// Sample product data
const products: Product[] = [
  { id: 1, name: "Project Management Pro", price: 99.99, image: "https://via.placeholder.com/1000",quantity:0 },
  { id: 2, name: "Code Editor Deluxe", price: 79.99, image: "https://via.placeholder.com/1000",quantity:0  },
  { id: 3, name: "Database Manager Ultimate", price: 149.99, image: "https://via.placeholder.com/1000",quantity:0  },
  { id: 4, name: "Cloud Storage Solution", price: 59.99, image: "https://via.placeholder.com/1000",quantity:0  },
  { id: 5, name: "Secure VPN Service", price: 39.99, image: "https://via.placeholder.com/1000",quantity:0  },
  { id: 6, name: "AI-Powered Analytics", price: 199.99, image: "https://via.placeholder.com/1000",quantity:0  },
];

// News Ticker Component
const NewsTicker = () => {
  const [news] = useState([
    "Concepteur et Fabricant de Solution Industriel Sur Mesure Depuis 2014",
    "Nouveau catalogue 2025 disponible à télécharger.",
    "Suivez-nous sur nos réseaux sociaux pour plus d'informations !",
  ]);

  return (
    <div className="bg-[#003399] text-white py-2">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center overflow-hidden">
          <div className="flex animate-marquee">
            {news.map((message, index) => (
              <div key={index} className="mr-8 whitespace-nowrap">
                {message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Section Component
const renderContactSection = () => (
  

  <section id="contact" className="w-full py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="container mx-auto px-6 lg:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-16">Contactez-Nous</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
        {[
          {
            icon: FaMapPin,
            title: "Adresse",
            description: "GP1, Km 24, 8012 Selten,  Grombalia, Nabeul.",
          },
          {
            icon: FaEnvelope,
            title: "Email",
            description: (
              <a href="mailto:smartmetalsystem@gmail.com" className="text-blue-500 hover:underline">
                smartmetalsystem@gmail.com
              </a>
            ),
          },
          {
            icon: FaPhone,
            title: "Téléphone",
            description: "T. :(+216) 39 102 142 | (+216) 53 033 166  ",
          },
          {
            icon: FaFacebook,
            title: "Facebook",
            description: (
              <a href="https://www.facebook.com/Mohamedyasssinbha?mibextid=ZbWKwL " className="text-blue-500 hover:underline">
                facebook.com/SMS Tunisie
              </a>
            ),
          },
          {
            icon: FaTiktok,
            title: "TikTok",
            description: (
              <a href="https://www.tiktok.com/@smart_metal_system?_t=8s8RfV8BLAz&_r=1 " className="text-blue-500 hover:underline">
                tiktok.com/@smartmetalsystem
              </a>
            ),
          },
          {
            icon: FaLinkedin,
            title: "LinkedIn",
            description: (
              <a href="https://www.linkedin.com/company/smart-metal-system/about/" className="text-blue-500 hover:underline">
                linkedin.com/company/smartmetalsystem
              </a>
            ),
          },
        ].map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex justify-center items-center bg-blue-500 text-white rounded-full mb-6 shadow-lg">
              <Icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

);

// Landing Page Component
const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart handling logic
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const renderLandingPage = () => (
    <main className="flex-1">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
      <NewsTicker />
      <section className="w-full py-12 md:py-24 lg:py-28 xl:py-28 bg-white dark:bg-black overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
                <span style={{ color: '#003399' }}>Concepteur et Fabricant de Solution Industriel</span>
                <span style={{ color: '#ff0000' }}> Sur Mesure</span>, 
                <span style={{ color: '#003399' }}> Depuis 2014</span>
              </h1>
              <p className="max-w-[600px] text-gray-800 dark:text-gray-300 md:text-xl mx-auto lg:mx-0">
                Chez Smart Metal System, nous mettons à votre service une expertise technique de pointe, des équipements modernes et une équipe dédiée pour répondre à vos besoins industriels avec efficacité et précision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="inline-flex items-center justify-center rounded-md bg-[#003399] text-white shadow-lg transition-all duration-200 transform hover:bg-[#00359f] hover:shadow-xl hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00359f] focus-visible:ring-offset-2"
                  onClick={() => window.open('/catalogue.pdf', '_blank')}
                >
                  Télécharger notre Catalogue
                  <Download className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex space-x-4">
                  <a
                    href="mailto:smartmetalsystem@gmail.com"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white rounded-full"
                    title="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                  <a
                    href="https://wa.me/53 033 166"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  </a>
                  <a
                    href="https://www.facebook.com/Mohamedyasssinbha?mibextid=ZbWKwL"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-blue-800 hover:text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a
                    href="tel:+216 39 102 142"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-teal-600 hover:text-white rounded-full"
                    title="Téléphone"
                  >
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:order-last">
            <video
        className="relative z-10 w-full max-w-[700px] aspect-[4/3] object-cover object-center"
  src="/SmS.mp4"
  height="750"
  width="700"
  muted={true}
  loop={true}
  autoPlay={true}
  playsInline={true}  // Correct, avec la majuscule "I"
  preload="metadata"
  
>

</video>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <CompanyPhotoSlider />
      <CompanyLogoSection />
      {renderContactSection()}
    </main>
  );

  return (
    <div className="flex flex-col min-h-screen">
         <Header
        setCurrentPage={setCurrentPage}
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {currentPage === "landing" ? renderLandingPage() : <ProductPage products={products} addToCart={addToCart} />}
      <SiteFooter />
    </div>
  );
};

export default LandingPage;
