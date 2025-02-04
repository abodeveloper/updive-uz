import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 80px;
  }

  .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .slick-slider {
      width: 65%;
    }
    .slick-slide *:focus-visible {
      outline: none !important;
    }
    .slick-slide {
      transition: transform 0.5s ease, opacity 0.5s ease;
      transform: scale(1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Yon tomondagi slaydlarni xiralashtirish */
    .slick-slide:not(.slick-center) {
      transform: scale(0.8); /* 🔹 Kichraytirish */
      opacity: 0.6; /* 🔹 Xiralashtirish */
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 40px;
`;
