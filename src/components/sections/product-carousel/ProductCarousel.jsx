import { Container } from "react-bootstrap";
import BrowserFrame from "react-browser-frame";
import Slider from "react-slick";
import { SectionWrapper } from "./ProductCarousel.styles";

const ProductCarousel = ({ images, url }) => {
  const settings = {
    className: "center",
    centerMode: true, // O‘rtadagi slaydni markazda qilish
    infinite: true,
    centerPadding: "150px", // O‘rtadagi slaydni markazda to‘liq ko‘rsatish
    slidesToShow: 1, // Faqat bitta slayd markazda ko‘rsatiladi
    speed: 500,
    autoplay: true, // Avtomatik almashish
    autoplaySpeed: 3000, // Har 3 sekundda almashish
    pauseOnHover: true, // Hover qilganda ham davom etish
    dots: true, // Pastdagi nuqtalarni qo‘shish,

    responsive: [
      {
        breakpoint: 768, // Mobil qurilmalar uchun
        settings: {
          slidesToShow: 1, // Mobilda bitta slayd ko‘rsatiladi
          centerPadding: "0", // Mobilda slaydlar o‘rtada to‘liq ko‘rsatiladi
        },
      },
    ],
  };

  return (
    <SectionWrapper>
      <Container>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index}>
                <BrowserFrame key={index} url={url} padding="0">
                  <img src={item} alt="" />
                </BrowserFrame>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ProductCarousel;
