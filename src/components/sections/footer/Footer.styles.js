import styled from "styled-components";

export const SectionWrapper = styled.div`
  border-top: 1px solid rgba(48, 48, 48, 0.07);
`;

export const Top = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding: 48px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  a {
    color: ${({ theme }) => theme.colors.text.textSecondary};
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
  }
`;

export const Bottom = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
    align-items: start;
  }
`;

export const BottomLeftText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-Light";
  font-size: 13px;
  line-height: 20px;
`;

export const BottomRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
