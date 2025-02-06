import CustomButton from "@/components/CustomButton";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import {
  Content,
  Description,
  Image,
  SectionWrapper,
  Title,
} from "./PageHeader.styles";

const PageHeader = ({ image, title, description, imageStyle }) => {
  const navigate = useNavigate();

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
            <CustomButton
              onClick={() => navigate("/contacts")}
              title={"Get started"}
              type="primary"
            />
          </Fade>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default PageHeader;
