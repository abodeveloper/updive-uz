import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { get } from "lodash";
import { Container } from "react-bootstrap";
import {
  Bottom,
  InfoBox,
  InfoDesc,
  InfoNumber,
  InfoTitle,
  InfoTopTitle,
  InfoWrapper,
  SectionWrapper,
  Seperator,
  Top,
} from "./ProductNumbers.styles";

const ProductNumbers = ({ data }) => {
  const { title, topTitle, description, left, center, right } = data;

  return (
    <SectionWrapper>
      <Container>
        <Top>
          <SectionTitle
            topTitle={topTitle}
            title={title}
            description={description}
          />
          <CustomButton type="primary" title={"Get started"} />
        </Top>
        <Bottom>
          <InfoWrapper>
            <InfoBox>
              <InfoTopTitle>{get(left, "topTitle")}</InfoTopTitle>
              <InfoNumber>{get(left, "number")}</InfoNumber>
              <InfoTitle>{get(left, "title")}</InfoTitle>
              <InfoDesc>{get(left, "description")}</InfoDesc>
            </InfoBox>
            <Seperator />
            <InfoBox>
              <InfoTopTitle>{get(center, "topTitle")}</InfoTopTitle>
              <InfoNumber>{get(center, "number")}</InfoNumber>
              <InfoTitle>{get(center, "title")}</InfoTitle>
              <InfoDesc>{get(center, "description")}</InfoDesc>
            </InfoBox>
            <Seperator />
            <InfoBox>
              <InfoTopTitle>{get(right, "topTitle")}</InfoTopTitle>
              <InfoNumber>{get(right, "number")}</InfoNumber>
              <InfoTitle>{get(right, "title")}</InfoTitle>
              <InfoDesc>{get(right, "description")}</InfoDesc>
            </InfoBox>
          </InfoWrapper>
        </Bottom>
      </Container>
    </SectionWrapper>
  );
};

export default ProductNumbers;
