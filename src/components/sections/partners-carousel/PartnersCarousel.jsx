import Logo6 from "@/assets/images/partners-logo/buxoro-gaz.svg";
import Logo2 from "@/assets/images/partners-logo/ichki-ishlar-vazirligi.svg";
import Logo1 from "@/assets/images/partners-logo/ies.svg";
import Logo5 from "@/assets/images/partners-logo/kiberxavfsizlik-mazkazi.svg";
import Logo3 from "@/assets/images/partners-logo/milliy-gvardiya.svg";
import Logo4 from "@/assets/images/partners-logo/mudofa-vazirligi.svg";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import Slider from "react-slick";
import { SectionWrapper, Title } from "./PartnersCarousel.styles";

const PartnersCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true, // O‘rtadagi slaydni markazda qilish
    infinite: true,
    centerPadding: "150px", // O‘rtadagi slaydni markazda to‘liq ko‘rsatish
    slidesToShow: 3, // Faqat bitta slayd markazda ko‘rsatiladi
    speed: 500,
    autoplay: false, // Avtomatik almashish
    autoplaySpeed: 3000, // Har 3 sekundda almashish
    pauseOnHover: false, // Hover qilganda ham davom etish
    dots: false, // Pastdagi nuqtalarni qo‘shish,
    responsive: [
      {
        breakpoint: 768, // Mobil qurilmalar uchun
        settings: {
          slidesToShow: 3, // Mobilda bitta slayd ko‘rsatiladi
          centerPadding: "0px", // Mobilda slaydlar o‘rtada to‘liq ko‘rsatiladi
        },
      },
    ],
  };

  const PARTNERS = [
    {
      title: "IES",
      img: Logo1,
    },
    {
      title: "IES",
      img: Logo2,
    },
    {
      title: "IES",
      img: Logo3,
    },
    {
      title: "IES",
      img: Logo4,
    },
    {
      title: "IES",
      img: Logo5,
    },
    {
      title: "IES",
      img: Logo6,
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>Trusted by thousands of teams</Title>
        <div className="slider-container">
          <Slider {...settings}>
            {PARTNERS?.map((item, index) => (
              <div key={index}>
                <OverlayTrigger
                  style={{ outline: "none" }}
                  placement="top"
                  delay={{ show: 150, hide: 150 }}
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>{item.title}</Tooltip>
                  }
                >
                  <img src={item.img} alt={item.title} />
                </OverlayTrigger>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersCarousel;
