import backgroundImage from "@/assets/images/BG.png"; // Rasmni import qilish
import styled from "styled-components";

const AuroraWrapper = styled.div`
  background: url(${backgroundImage}) no-repeat center center/cover;
  padding-top: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

const ContentWrapper = styled.div``;

const AuroraBackground = ({ children }) => {
  return (
    <AuroraWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </AuroraWrapper>
  );
};

export default AuroraBackground;
