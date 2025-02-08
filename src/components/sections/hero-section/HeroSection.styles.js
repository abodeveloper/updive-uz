import styled from "styled-components";

export const SectionWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageMobile = styled.img`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 11;
  transform: translateY(50px);

  button{
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 28px;
    align-items: center;
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
    text-align: center;
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
    text-align: center;
  }
`;

export const HeroImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.img`
  flex: 1;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
