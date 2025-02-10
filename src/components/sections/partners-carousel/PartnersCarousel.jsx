import Logo2 from "@/assets/images/partners-logo/ichki-ishlar-vazirligi.svg";
import Logo1 from "@/assets/images/partners-logo/ies.svg";
import Logo5 from "@/assets/images/partners-logo/kiberxavfsizlik-mazkazi.svg";
import Logo3 from "@/assets/images/partners-logo/milliy-gvardiya.svg";
import Logo4 from "@/assets/images/partners-logo/mudofa-vazirligi.svg";
import Logo6 from "@/assets/images/partners-logo/neft-gaz.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BoxWrapper, SectionWrapper, Title } from "./PartnersCarousel.styles";

const animation = { duration: 15000, easing: (t) => t };

const PartnersCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth < 768 ? 3 : 5);
    };

    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const [sliderRefDesktop] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: 5, spacing: 20 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const [sliderRefMobile] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: 3, spacing: 20 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const PARTNERS = [
    {
      title: "“Issiqlik Elektr Stansiyalari” Aksiyadorlik Jamiyati",
      img: Logo1,
    },
    { title: "O'zbekiston Respublikasi Ichki Ishlar Vazirligi", img: Logo2 },
    { title: "O‘zbekiston Respublikasi Milliy gvardiyasi", img: Logo3 },
    { title: "O'zbekiston Respublikasi Mudofaa vazirligi", img: Logo4 },
    { title: "Kiberxavfsizlik markazi", img: Logo5 },
    { title: "“Uzbekneftgaz” Aksiyadorlik Jamiyati", img: Logo6 },
  ];

  return (
    <SectionWrapper>
      <Container>
        <BoxWrapper>
          <Title>Trusted by thousands of teams</Title>
          <div
            ref={slidesPerView == "5" ? sliderRefDesktop : sliderRefMobile}
            className="keen-slider"
          >
            {PARTNERS.map((item, index) => (
              <div className="keen-slider__slide" key={index}>
                <div className="img-box">
                  <img src={item.img} alt={item.title} />
                  <div className="hover-text">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </BoxWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersCarousel;
