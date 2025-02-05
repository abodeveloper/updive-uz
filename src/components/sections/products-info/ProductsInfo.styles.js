import styled, { css } from "styled-components";

export const SectionWrapper = styled.div`
  ${({ background }) =>
    background === "primary"
      ? css`
          background-color: ${({ theme }) => theme.colors.background.bgPrimary};
        `
      : css`
          background-color: ${({ theme }) =>
            theme.colors.background.bgSecondary};
        `}
`;

export const MyBox = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Top = styled.div`
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 0 64px 0;
    display: block;
    grid-template-columns: repeat(1, 1fr);
    gap: 48px;
  }
`;

export const LeftSide = styled.div`
  padding: 160px 0;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  ${({ imagePosition }) =>
    imagePosition === "left"
      ? css`
          order: 2;
        `
      : css`
          order: 1;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 1;
    padding: 64px 0;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RightSide = styled.div`
  flex: 1;

  ${({ imagePosition }) =>
    imagePosition === "left"
      ? css`
          order: 1;
        `
      : css`
          order: 2;
        `}

  .browser-frame {
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 800px;
    box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.25),
      0px 1px 0.5px 0px rgba(255, 255, 255, 0.6) inset,
      0px 16px 48px 0px var(--shadows-drop-1, rgba(22, 25, 29, 0.03)),
      0px 10px 18px 0px var(--shadows-drop-1, rgba(22, 25, 29, 0.03)),
      0px 5px 8px 0px var(--shadows-drop-2, rgba(22, 25, 29, 0.04)),
      0px 5.885px 6.636px 0px rgba(0, 0, 0, 0.04);

    ${({ imagePosition }) =>
      imagePosition === "left"
        ? css`
            left: -100px;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
          `
        : css`
            right: -100px;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
          `}

    .browser-frame__body {
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 2;
    .browser-frame {
      position: inherit;
      width: 100%;
      object-fit: contain;
      transform: translateY(0);
      border-radius: 12px;
    }
  }
`;

export const Bottom = styled.div`
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 48px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const InfoIcon = styled.img``;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
`;
export const InfoDesc = styled.div`
  color: ${({ theme }) => theme.colors.text.textSeondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
`;
