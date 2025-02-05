import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
`;

export const Top = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const Bottom = styled.div`
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 48px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  width: 325px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Seperator = styled.div`
  width: 1px;
  background-color: rgba(48, 48, 48, 0.07);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 1px;
    width: 100%;
  }
`;

export const InfoTopTitle = styled.div`
  font-family: "Inter-SemiBold";
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const InfoNumber = styled.div`
  font-family: "Inter-Bold";
  font-size: 40px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.text.textPrimary};

  .count {
    font-family: "Inter-Bold";
    font-size: 40px;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.text.textPrimary};
  }
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-SemiBold";
  font-size: 16px;
  line-height: 24px;
`;

export const InfoDesc = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
`;
