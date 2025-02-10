import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding-bottom: 80px;

  .keen-slider {
    width: 65% !important;
    display: flex;
    align-items: center;
    justify-content: center;

    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );

    .keen-slider__slide {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 45px;
      position: relative;
      .img-box {
        &:hover .hover-text {
          opacity: 1;
        }

        .hover-text {
          width: 100%;
          max-width: 200px !important;
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
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 80px;
    .keen-slider {
      width: 100% !important;

      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 1) 75%,
        rgba(0, 0, 0, 0) 100%
      );
      -webkit-mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 1) 75%,
        rgba(0, 0, 0, 0) 100%
      );

      .keen-slider__slide {
        padding-top: 60px;
      }
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 20px;
  }
`;
