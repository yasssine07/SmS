"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyPhotoSlider from "@/components/company-photo-slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, Download, MapPin, Mail, Phone, Facebook } from "lucide-react";
import CompanyLogoSection from "@/components/company-logo";
import ServicesSection from "@/components/services-section";
import SiteFooter from "@/components/site-footer";
import ProductPage from "@/components/product-section";
import Header from "@/components/site-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type Props = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};



const products = [
  { id: 1, name: "Project Management Pro", price: 99.99, image: "https://via.placeholder.com/1000" },
  { id: 2, name: "Code Editor Deluxe", price: 79.99, image: "https://via.placeholder.com/1000" },
  { id: 3, name: "Database Manager Ultimate", price: 149.99, image: "https://via.placeholder.com/1000" },
  { id: 4, name: "Cloud Storage Solution", price: 59.99, image: "https://via.placeholder.com/1000" },
  { id: 5, name: "Secure VPN Service", price: 39.99, image: "https://via.placeholder.com/1000" },
  { id: 6, name: "AI-Powered Analytics", price: 199.99, image: "https://via.placeholder.com/1000" },
];

const NewsTicker = () => {
  const [news] = useState([
    "Nos solutions industrielles sont désormais disponibles dans plus de 10 pays !",
    "Nouveau catalogue 2024 disponible à télécharger.",
    "Suivez-nous sur nos réseaux sociaux pour plus d'informations !",
  ]);

  return (
    <div className="bg-[#003399] text-white py-2">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-8 overflow-hidden">
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
    </div>
  );
};

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const renderContactSection = () => (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-16">
          Contactez-Nous
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex justify-center items-center bg-blue-500 text-white rounded-full mb-6 shadow-lg">
              <MapPin className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Adresse</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Soliman, Nabeul, Tunisie
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex justify-center items-center bg-blue-500 text-white rounded-full mb-6 shadow-lg">
              <Mail className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="mailto:contact@smartmetalsystem.com" className="text-blue-500 hover:underline">
                contact@smartmetalsystem.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex justify-center items-center bg-blue-500 text-white rounded-full mb-6 shadow-lg">
              <Phone className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Téléphone</h3>
            <p className="text-gray-600 dark:text-gray-400">T. :(+216) 36 110 321</p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 flex justify-center items-center bg-blue-500 text-white rounded-full mb-6 shadow-lg">
              <Facebook className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Facebook</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="https://facebook.com/smartmetalsystem" className="text-blue-500 hover:underline">
                facebook.com/smartmetalsystem
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );

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
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
      <NewsTicker />
      <section className="w-full py-12 md:py-24 lg:py-28 xl:py-28 bg-white dark:bg-black overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
                <span style={{ color: '#003399' }}>Des Solutions Industrielles</span>
                <span style={{ color: '#ff0000' }}> Sur Mesure</span>, 
                <span style={{ color: '#003399' }}> Partout et À Tout Moment</span>
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
                    href="mailto:contact@smartmetalsystem.com"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white rounded-full"
                    title="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  </a>
                  <a
                    href="https://facebook.com/yourpage"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-blue-800 hover:text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-700 hover:bg-teal-600 hover:text-white rounded-full"
                    title="Téléphone"
                  >
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:order-last">
              <img
                alt="Hero"
                className="relative z-10 w-full h-[auto] max-w-[700px] aspect-[4/3] object-cover object-center"
                height="750"
                src="/SmS.png"
                width="700"
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <section>
        <CompanyPhotoSlider />
      </section>
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
