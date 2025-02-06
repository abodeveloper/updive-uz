import Logo6 from "@/assets/images/partners-logo/buxoro-gaz.svg";
import Logo2 from "@/assets/images/partners-logo/ichki-ishlar-vazirligi.svg";
import Logo1 from "@/assets/images/partners-logo/ies.svg";
import Logo5 from "@/assets/images/partners-logo/kiberxavfsizlik-mazkazi.svg";
import Logo3 from "@/assets/images/partners-logo/milliy-gvardiya.svg";
import Logo4 from "@/assets/images/partners-logo/mudofa-vazirligi.svg";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { SectionWrapper, Title } from "./PartnersCarousel.styles";

const PartnersCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true, // O‘rtadagi slaydni markazda qilish
    infinite: true, // Cheksiz aylanish
    loop: true, // Cheksiz aylanish
    centerPadding: "150px", // O‘rtadagi slaydni markazda to‘liq ko‘rsatish
    slidesToShow: 3, // Faqat bitta slayd markazda ko‘rsatiladi
    speed: 2000, // Slaydlarni sekin aylanishi uchun yuqori qiymat (ms)
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 0, // Aylanishni doimiy qilish uchun 0
    pauseOnHover: true, // Hoverda to'xtamasligi uchun
    dots: false, // Pastdagi nuqtalarni qo‘shish
    cssEase: "linear", // Tekis va uzluksiz harakat
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
      title: "“ISSIQLIK ELЕKTR STANSIYALARI” AKSIYADORLIK JAMIYATI",
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
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default PartnersCarousel;
