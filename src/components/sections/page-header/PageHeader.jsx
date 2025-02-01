import CustomButton from "@/components/CustomButton";
import { Container } from "react-bootstrap";
import {
  Content,
  Description,
  Image,
  SectionWrapper,
  Title,
} from "./PageHeader.styles";

const PageHeader = ({ image, title, description, imageStyle }) => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Image src={image} style={imageStyle} alt="" />
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <CustomButton title={"Get started"} type="primary" />
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default PageHeader;
