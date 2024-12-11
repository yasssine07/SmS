import { Box, Leaf, Server, Package, Shield, Truck, Cog } from 'lucide-react';

const services = [
  { name: "Stockage", icon: <Box /> },
  { name: "Environnement", icon: <Leaf /> },
  { name: "Infrastructure", icon: <Server /> },
  { name: "Manutention", icon: <Package /> },
  { name: "Mobilier", icon: <Shield /> },
  { name: "Sécurité", icon: <Shield /> },
  { name: "Transitique", icon: <Truck /> },
  { name: "Ingénierie", icon: <Cog /> },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#003399] to-[#ff0000] text-white" id="service">
      <div className="container px-6 md:px-10 mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white dark:text-white animate__animated animate__fadeInUp">
          Nos Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl group"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="text-[100px] text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
