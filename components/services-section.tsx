import { Briefcase, Layers, Shield, Smartphone } from 'lucide-react';

const services = [
  { name: "Expertise technique de pointe", description: "Fournir des conseils et une assistance technique avancée pour résoudre des problèmes industriels complexes.", icon: <Briefcase /> },
  { name: "Fourniture d'équipements modernes", description: "Mettre à disposition des équipements industriels de haute qualité et à la pointe de la technologie.", icon: <Layers /> },
  { name: "Sécurité industrielle", description: "Assurez la sécurité de vos opérations avec nos solutions avancées", icon: <Shield /> },
  { name: "Réponse efficace et précise aux besoins industriels", description: "Proposer des solutions adaptées aux exigences spécifiques des clients, avec une approche centrée sur l'efficacité et la précision.", icon: <Smartphone /> },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#003399] to-[#ff0000] text-white" id='service'>
     <div className="container px-6 md:px-10 mx-auto">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-white dark:text-white animate__animated animate__fadeInUp">
    Nos Services
  </h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <div className="p-8 text-center">
          <div className="text-6xl mb-6 text-blue-600 dark:text-blue-400">
            {service.icon}
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {service.name}
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
