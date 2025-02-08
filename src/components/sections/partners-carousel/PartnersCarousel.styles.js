import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 80px;
    .slider-container {
      .slick-slider {
        width: 100% !important;
      }
    }
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 40px;
      position: relative;

      .img-box {
        &:hover .hover-text {
          opacity: 1;
        }

        .hover-text {
          width: 100%;
          border-radius: 10px;
          background-color: #131313;
          padding: 5px;
          position: absolute;
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: 0.2s all linear;
          text-align: center;
          color: #ffff;
          font-family: "Inter-Light";
          font-size: 10px;
        }
      }
    }

    /* Yon tomondagi slaydlarni xiralashtirish */
    .slick-slide:not(.slick-center) {
      
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
