import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import Hero from "@/assets/images/home-hero-img.svg";
import CustomButton from "@/components/CustomButton";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

import {
  Content,
  Description,
  HeroImage,
  HeroImageBox,
  ImageMobile,
  LeftSide,
  SectionWrapper,
  Title,
} from "./HeroSection.styles";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Container>
        <Content>
          <LeftSide>
            <ImageMobile src={HomeHeaderImage} alt="" />
            <Fade duration={1000} delay={500}>
              <Title
                dangerouslySetInnerHTML={{
                  __html: "Protect Your  Business <br/> with Confidence",
                }}
              />
            </Fade>
            <Fade duration={1000} delay={500}>
              <Description
                dangerouslySetInnerHTML={{
                  __html:
                    "Comprehensive Solutions to Shield <br/> Your Operations from  Modern Threats",
                }}
              />
            </Fade>
            <Fade duration={1000} delay={700}>
              <CustomButton
                onClick={() => navigate("/contacts")}
                title={"Get started"}
                type="primary"
              />
            </Fade>
          </LeftSide>
          <HeroImageBox>
            <Fade duration={1000} delay={100}>
              <HeroImage src={Hero} alt="" />
            </Fade>
          </HeroImageBox>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default HeroSection;
