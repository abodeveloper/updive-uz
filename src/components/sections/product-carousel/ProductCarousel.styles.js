import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 48px;
  }

  .browser-frame {
    .browser-frame__body {
      img {
        width: 100%;
      }
    }
  }

  .slider-container {
    .slide-slide {
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    /* Yon tomondagi slaydlarni xiralashtirish */
    .slick-slide:not(.slick-center) {
      transform: scale(0.9); /* 🔹 Kichraytirish */
      opacity: 0.6; /* 🔹 Xiralashtirish */
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .browser-frame {
      .browser-frame__body {
        img {
          width: 100%;
        }
      }
    }
  }

  /* Dotlar */

  .slick-dots {
    bottom: -40px !important; /* 🔹 Dotslarning joylashuvi */
  }

  /* Har bir dotning stylingi */
  .slick-dots li {
    margin: 0 6px; /* 🔹 Dotslar orasidagi masofa */
    background-color: #e9e9e9;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active {
    width: 24px;
    background-color: #c8dfff !important;
    opacity: 1;
  }
`;
