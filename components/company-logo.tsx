import React from "react";

const CompanyLogoSection = () => {
  const companies = [
    { name: "Slack", logo: "/Ref/1.jpg" },
    { name: "Slack", logo: "/Ref/2.jpg" },
    { name: "Slack", logo: "/Ref/3.jpg" },
    { name: "Slack", logo: "/Ref/4.jpg" },
    { name: "Slack", logo: "/Ref/5.jpg" },
    { name: "Slack", logo: "/Ref/6.jpg" },
    { name: "Slack", logo: "/Ref/7.jpg" },
    { name: "Slack", logo: "/Ref/8.jpg" },
    { name: "Slack", logo: "/Ref/9.jpg" },
    { name: "Slack", logo: "/Ref/10.jpg" },
    { name: "Slack", logo: "/Ref/11.jpg" },
    { name: "Slack", logo: "/Ref/12.jpg" },
    { name: "Slack", logo: "/Ref/13.jpg" },
    { name: "Slack", logo: "/Ref/14.jpg" },
    { name: "Slack", logo: "/Ref/15.jpg" },
    { name: "Slack", logo: "/Ref/16.jpg" },
    { name: "Slack", logo: "/Ref/17.jpg" },
    { name: "Slack", logo: "/Ref/18.jpg" },
    { name: "Slack", logo: "/Ref/19.jpg" },
    { name: "Slack", logo: "/Ref/20.jpg" },
    { name: "Slack", logo: "/Ref/21.jpg" },
    { name: "Slack", logo: "/Ref/22.jpg" },
    { name: "Slack", logo: "/Ref/23.jpg" },
    { name: "Slack", logo: "/Ref/24.jpg" },
    { name: "Slack", logo: "/Ref/25.jpg" },
    { name: "Slack", logo: "/Ref/26.jpg" },
    { name: "Slack", logo: "/Ref/27.jpg" },
    { name: "Slack", logo: "/Ref/28.jpg" },
    { name: "Slack", logo: "/Ref/29.jpg" },
    { name: "Slack", logo: "/Ref/30.jpg" },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900" id="logo">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-10">
          Références
        </h2>
        <div className="overflow-hidden relative">
          <div className="scroll-container">
            <div className="scroll-group">
              {companies.map((company, i) => (
                <div key={`group1-${i}`} className="flex-shrink-0 p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-32 w-auto object-contain mx-auto"
                  />
                </div>
              ))}
              {companies.map((company, i) => (
                <div key={`group2-${i}`} className="flex-shrink-0 p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-32 w-auto object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .scroll-group {
          display: flex;
          animation: scroll-loop 20s linear infinite;
        }
        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
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
