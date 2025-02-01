import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 28px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.96px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 24px;
  }
`;
