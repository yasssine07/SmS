import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { id: 1, src: "/1001.jpg", alt: "Production en cours", caption: "Production en cours" },
  { id: 2, src: "/1002.jpg", alt: "Équipement moderne", caption: "Équipement moderne" },
  { id: 3, src: "/1003.jpg", alt: "Installation industrielle", caption: "Installation industrielle" },
  { id: 4, src: "/1004.jpg", alt: "Équipe au travail", caption: "Équipe au travail" },
];

const CompanyPhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
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
          Galerie de l'Entreprise
        </h2>
        <Slider {...settings}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex flex-col items-center justify-center h-full"
            >
              <div className="flex justify-center items-center w-full">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="max-w-[900px] w-auto h-auto rounded-lg shadow-lg object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
                {photo.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyPhotoSlider;
