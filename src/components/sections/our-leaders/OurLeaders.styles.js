import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
`;

export const Top = styled.div`
  padding: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 64px 0 40px 0;
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
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--Border-light, #efefef);
  box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
    0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
`;

export const InfoIcon = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 24px;
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: inherit;
  }
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.8px;
  text-align: center;
`;

export const InfoPosition = styled.div`
  color: ${({ theme }) => theme.colors.text.textSeondary};
  font-family: "Inter";
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 16px 0 24px 0;
`;

export const InfoDesc = styled.div`
  color: ${({ theme }) => theme.colors.text.textSeondary};
  font-family: "Inter-Light";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  text-align: center;
`;
