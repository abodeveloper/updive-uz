import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import {
  Bottom,
  InfoBox,
  InfoDesc,
  InfoIcon,
  InfoIconBox,
  InfoTitle,
  InfoWrapper,
  SectionWrapper,
  Top,
} from "./ProductFeature.styles";

const ProductFeature = ({ data }) => {
  const { title, description, topTitle, info_data: INFO_DATA } = data;

  return (
    <SectionWrapper>
      <Container>
        <Top>
          <SectionTitle
            justify="start"
            topTitle={topTitle}
            title={title}
            description={description}
          />
        </Top>
        <Bottom>
          <InfoWrapper>
            {INFO_DATA.map((item, index) => (
              <InfoItem key={index} {...item} />
            ))}
          </InfoWrapper>
        </Bottom>
      </Container>
    </SectionWrapper>
  );
};

export default ProductFeature;

export const InfoItem = ({ icon, title, description }) => {
  return (
    <InfoBox>
      {icon && (
        <InfoIconBox>
          <InfoIcon src={icon} />
        </InfoIconBox>
      )}
      <InfoTitle>{title}</InfoTitle>
      {description && <InfoDesc>{description}</InfoDesc>}
    </InfoBox>
  );
};
