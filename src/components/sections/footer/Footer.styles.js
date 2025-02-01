import styled from "styled-components";

export const SectionWrapper = styled.div``;

export const Top = styled.div`
  background-color: #131313;
  padding: 80px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const Bottom = styled.div`
  background-color: #202020;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const BottomText = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
  font-family: "Inter-Light";
  font-size: 13px;
  line-height: 20px;
`;
