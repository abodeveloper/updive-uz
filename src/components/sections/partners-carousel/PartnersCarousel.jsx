import Logo6 from "@/assets/images/partners-logo/buxoro-gaz.svg";
import Logo2 from "@/assets/images/partners-logo/ichki-ishlar-vazirligi.svg";
import Logo1 from "@/assets/images/partners-logo/ies.svg";
import Logo5 from "@/assets/images/partners-logo/kiberxavfsizlik-mazkazi.svg";
import Logo3 from "@/assets/images/partners-logo/milliy-gvardiya.svg";
import Logo4 from "@/assets/images/partners-logo/mudofa-vazirligi.svg";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { SectionWrapper, Title } from "./PartnersCarousel.styles";
import { useEffect, useRef } from "react";

const PartnersCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderTrack = document.querySelector(".slick-track");

    if (sliderTrack) {
      sliderTrack.style.transition = "none"; // Smooth pause uchun transitionni o‘chiramiz
    }
  }, []);

  const handleMouseEnter = () => {
    const sliderTrack = document.querySelector(".slick-track");
    if (sliderTrack) {
      sliderTrack.style.animationPlayState = "paused"; // Darhol to‘xtaydi
    }
  };

  const handleMouseLeave = () => {
    const sliderTrack = document.querySelector(".slick-track");
    if (sliderTrack) {
      sliderTrack.style.animationPlayState = "running"; // Davom etadi
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false, // ❌ Buning o'rniga custom pause ishlatamiz
    arrows: false,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const PARTNERS = [
    {
      title: "“IES” aksiyadorlik jamiyati",
      img: Logo1,
    },
    {
      title: "Ichki ishlar vazirligi",
      img: Logo2,
    },
    {
      title: "Miliy gvardiya",
      img: Logo3,
    },
    {
      title: "Mudofa vazirligi",
      img: Logo4,
    },
    {
      title: "Kiberxavfsizlik markazi",
      img: Logo5,
    },
    {
      title: "Buxoro gaz",
      img: Logo6,
    },
  ];

  const EXTENDED_PARTNERS = [
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
    ...PARTNERS,
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>Trusted by thousands of teams</Title>
        <div
          className="slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
            {EXTENDED_PARTNERS.map((item, index) => (
              <div key={index} className="img-box">
                <img src={item.img} alt={item.title} />
                <div className="hover-text">{item.title}</div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersCarousel;
