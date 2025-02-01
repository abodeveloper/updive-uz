import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import {
  Bottom,
  ButtonsWrapper,
  InfoBox,
  InfoDesc,
  InfoIcon,
  InfoTitle,
  InfoWrapper,
  LeftSide,
  MyBox,
  RightSide,
  SectionWrapper,
  Top,
} from "./ProductsInfo.styles";

const ProductsInfo = ({
  background = "primary",
  imagePosition = "right",
  image,
  title,
  topTitle,
  description,
  info_data: INFO_DATA,
}) => {
  return (
    <SectionWrapper imagePosition={imagePosition} background={background}>
      <MyBox>
        <Container>
          <Top>
            <LeftSide imagePosition={imagePosition}>
              <SectionTitle
                justify="flex-start"
                topTitle={topTitle}
                title={title}
                description={description}
              />
              <ButtonsWrapper>
                <CustomButton type="primary" title={"Get demo"} />
                <CustomButton type="default" title={"Contacts"} />
              </ButtonsWrapper>
            </LeftSide>
            <RightSide imagePosition={imagePosition}>
              <img src={image} alt="" />
            </RightSide>
          </Top>
        </Container>
      </MyBox>
      <Container>
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

export default ProductsInfo;

export const InfoItem = ({ icon, title, description }) => {
  return (
    <InfoBox>
      {icon && <InfoIcon src={icon} />}
      <InfoTitle>{title}</InfoTitle>
      {description && (
        <InfoDesc dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </InfoBox>
  );
};
