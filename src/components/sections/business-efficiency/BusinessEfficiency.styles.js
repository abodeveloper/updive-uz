import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
`;

export const Top = styled.div`
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 64px 0 80px 0;
  }
`;

export const Bottom = styled.div`
  padding-bottom: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 48px;
  }
`;

export const InfoBox = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 0.1px solid rgba(48, 48, 48, 0.2);
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  ${InfoBox}:nth-child(1) {
    background: radial-gradient(
      128.16% 88.45% at 97.1% 96.94%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }

  ${InfoBox}:nth-child(2) {
    background: radial-gradient(
      107.51% 67.19% at 1.93% 96.94%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }

  ${InfoBox}:nth-child(3) {
    background: radial-gradient(
      167.27% 98.91% at 96.82% 90.28%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }

  ${InfoBox}:nth-child(4) {
    background: radial-gradient(
      179.69% 138.55% at 100% 0%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }
  ${InfoBox}:nth-child(5) {
    background: radial-gradient(
      69.49% 109.47% at 4.42% 5.56%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }
  ${InfoBox}:nth-child(6) {
    background: radial-gradient(
      98.86% 85.27% at 96.13% 3.61%,
      rgba(192, 221, 255, 0.42) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    /* components/inner-0.5px */
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  }
`;

export const InfoIcon = styled.img``;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  margin: 24px 0;
`;
export const InfoDesc = styled.div`
  color: ${({ theme }) => theme.colors.text.textSeondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
`;
