import React from "react";

const CompanyLogoSection = () => {
  const companies = [
    { name: "Slack", logo: "/ref/1 (1).jpg" },
    { name: "Slack", logo: "/ref/1 (2).jpg" },
    { name: "Slack", logo: "/ref/1 (3).jpg" },
    { name: "Slack", logo: "/ref/1 (4).jpg" },
    { name: "Slack", logo: "/ref/1 (5).jpg" },
    { name: "Slack", logo: "/ref/1 (6).jpg" },
    { name: "Slack", logo: "/ref/1 (7).jpg" },
    { name: "Slack", logo: "/ref/1 (8).jpg" },
    { name: "Slack", logo: "/ref/1 (9).jpg" },
    { name: "Slack", logo: "/ref/1 (10).jpg" },
    { name: "Slack", logo: "/ref/1 (11).jpg" },
    { name: "Slack", logo: "/ref/1 (12).jpg" },
    { name: "Slack", logo: "/ref/1 (13).jpg" },
    { name: "Slack", logo: "/ref/1 (14).jpg" },
    { name: "Slack", logo: "/ref/1 (15).jpg" },
    { name: "Slack", logo: "/ref/1 (16).jpg" },
    { name: "Slack", logo: "/ref/1 (17).jpg" },
    { name: "Slack", logo: "/ref/1 (18).jpg" },
    { name: "Slack", logo: "/ref/1 (19).jpg" },
    { name: "Slack", logo: "/ref/1 (20).jpg" },
    { name: "Slack", logo: "/ref/1 (21).jpg" },
    { name: "Slack", logo: "/ref/1 (22).jpg" },
    { name: "Slack", logo: "/ref/1 (23).jpg" },
    { name: "Slack", logo: "/ref/1 (24).jpg" },
    { name: "Slack", logo: "/ref/1 (25).jpg" },
    { name: "Slack", logo: "/ref/1 (26).jpg" },
    { name: "Slack", logo: "/ref/1 (27).jpg" },
    { name: "Slack", logo: "/ref/1 (28).jpg" },
    { name: "Slack", logo: "/ref/1 (29).jpg" },
    { name: "Slack", logo: "/ref/1 (30).jpg" },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900" id="logo">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-10">
          Références
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 animate-scroll items-center">
            {companies.map((company, i) => (
              <div key={i} className="flex-shrink-0 p-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-32 w-auto object-contain mx-auto"  // Taille augmentée ici
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyLogoSection;
