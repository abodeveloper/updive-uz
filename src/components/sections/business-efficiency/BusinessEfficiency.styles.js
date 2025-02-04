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

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
  padding: 24px;
  border-radius: 8px;
  border: 0.5px solid rgba(48, 48, 48, 0.2);
  background: radial-gradient(
    128.16% 88.45% at 97.1% 96.94%,
    rgba(192, 221, 255, 0.42) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
    0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
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
