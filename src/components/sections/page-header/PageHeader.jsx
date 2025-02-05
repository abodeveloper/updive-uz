import CustomButton from "@/components/CustomButton";
import { Container } from "react-bootstrap";
import {
  Content,
  Description,
  Image,
  SectionWrapper,
  Title,
} from "./PageHeader.styles";
import { Fade } from "react-reveal";

const PageHeader = ({ image, title, description, imageStyle }) => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Fade duration={1000} delay={100}>
            <Image src={image} style={imageStyle} alt="" />
          </Fade>
          <Fade duration={1000} delay={500}>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Fade>
          <Fade duration={1000} delay={500}>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </Fade>
          <Fade duration={1000} delay={700}>
            <CustomButton title={"Get started"} type="primary" />
          </Fade>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default PageHeader;
