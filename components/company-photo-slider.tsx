import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { id: 1, src: "/realis/stockage.jpg", alt: "Stockage", caption: "Mezzanine 500M² capacité 500 kg/M²" },
  { id: 2, src: "/realis/2-environnement.jpg", alt: "environnement", caption: "Cabine de stockage produit inflammable avec bac de rétention " },
  { id: 3, src: "/realis/3-infrastructure.jpg", alt: "infrastructure", caption: "Bâtiment modulaire 2* 18M² -cuisine – réfectoire et 2 WC H-F" },
  { id: 4, src: "/realis/4-manutention.jpg", alt: "Manutension", caption: "Monte-charge 6mtr capacité 1000 KG" },
  { id: 5, src: "/realis/5-mobilier.jpg", alt: "mobilier", caption: "Établie et armoire laboratoire " },
  { id: 6, src: "/realis/6-sécurité.jpg", alt: "Securité", caption: "SAS automatique pour mezzanine " },
  { id: 7, src: "/realis/7-transitique.jpg", alt: "Transitique", caption: "Ligne d’assemblage automatique avec système de calcul TRS " },
  { id: 8, src: "/realis/8-ingénieurie.jpg", alt: "ingénieurie ", caption: "Tunnel de séchage et de déshydratation pour produit alimentaire " },
];

const CompanyPhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Affiche 3 images à la fois
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Ajoute des flèches de navigation
    responsive: [
      {
        breakpoint: 1024, // Écran moyen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Écran mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      aria-labelledby="gallery-heading"
      className="py-12 bg-gray-50 dark:bg-gray-900"
      id="photo"
    >
      <div className="container mx-auto px-4">
        <h2
          id="gallery-heading"
          className="text-3xl font-extrabold text-center mb-6 text-black dark:text-white"
        >
          Réalisations
        </h2>
        <Slider {...settings}>
          {photos.map((photo) => (
            <div key={photo.id} className="p-4">
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="max-w-full max-h-[550px] w-auto h-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyPhotoSlider;
