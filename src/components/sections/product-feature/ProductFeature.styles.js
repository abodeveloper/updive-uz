import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
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
  gap: 80px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

export const InfoBox = styled.div``;

export const InfoIconBox = styled.div`
  border-radius: 6px;
  background: #eef2ff;
  display: inline-block;
  padding: 10px;
`;
export const InfoIcon = styled.img``;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  margin: 15px 0;
`;

export const InfoDesc = styled.div`
  color: ${({ theme }) => theme.colors.text.textSeondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
`;
