import React from "react";

const CompanyLogoSection = () => {
  const companies = [
    {
      name: "Slack",
      logo: "https://th.bing.com/th/id/OIP.YPvcNb72S-lIze7gSE-iqQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7.png",
    },
    {
      name: "Salesforce",
      logo: "https://www.lemoniteur.fr/mediatheque/4/8/7/001314784_896x598_c.jpg",
    },
    {
      name: "Trello",
      logo: "https://th.bing.com/th/id/OIP.w5Gqu_FkWXbzDdus55up5AHaEq?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Asana",
      logo: "https://www.vitalait.net/dam/jcr:6d097891-559e-4066-b62c-6a1653ad1d17/Logo%20FR%20(1).png",
    },
    {
      name: "Dropbox",
      logo: "https://seeklogo.com/images/L/la-poste-tunisienne-logo-6EDCA63698-seeklogo.com.png",
    },
    {
      name: "Zoom",
      logo: "https://th.bing.com/th/id/R.b428f4fe2e0ca9a698de29b579bd1ff0?rik=iq6ZA6qlUIRVDQ&riu=http%3a%2f%2fwww.sbf.com.tn%2fwp-content%2fuploads%2fbfi_thumb%2fSICAME-om4v5aj1j7xe00hoe7tx2i4wc4etxsgwq5lxzq4tqs.png&ehk=4Co9o0dQ7QujpzDM0QXiVxa089W%2fcQkVCvoTzigiM%2bU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Zoom",
      logo: "https://media.licdn.com/dms/image/C4E0BAQHLiRCQCuTAmA/company-logo_200_200/0/1652516482968?e=2147483647&v=beta&t=gXZVEgonbNCyZiiqFSeGgDamKL3t0eI5lXPI5wjxqmE",
    },
    {
      name: "Zoom",
      logo: "https://yt3.ggpht.com/a/AATXAJwe4qV6ZMNRCCIttviL0DTPIEXufzStxOlTFQ=s900-c-k-c0xffffffff-no-rj-mo",
    },
    {
      name: "Zoom",
      logo: "https://i0.wp.com/concours-tunisie.tn/wp-content/uploads/2018/11/Lilas-Recrutement-Candidature-Spontan%C3%A9e.png?fit=1252%2C720&ssl=1",
    },
    {
      name: "Zoom",
      logo: "https://th.bing.com/th/id/OIP.7KpMkIjE5uk2WGtqWKom2wHaBe?w=378&h=69&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Zoom",
      logo: "https://th.bing.com/th/id/OIP.tbdFlOVSqxkeisykHrEHrAHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Zoom",
      logo: "https://www.mramma.tn/sites/default/files/styles/profile-pic/public/1520718_443629512441752_906541555263770472_n.png?itok=SC4vc3hj",
    },
    {
      name: "Zoom",
      logo: "https://yt3.ggpht.com/a/AATXAJxhzNJypBBp6ip6vI5kH7P3vxTwSvDsF3oIkg=s900-c-k-c0xffffffff-no-rj-mo",
    },
    {
      name: "Zoom",
      logo: "https://www.mramma.tn/sites/default/files/styles/profile-pic/public/1520718_443629512441752_906541555263770472_n.png?itok=SC4vc3hj",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900" id="logo">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-10">
          Nos Clients
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 animate-scroll items-center">
            {companies.map((company, i) => (
              <div key={i} className="flex-shrink-0 p-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-20 w-auto object-contain mx-auto"
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
