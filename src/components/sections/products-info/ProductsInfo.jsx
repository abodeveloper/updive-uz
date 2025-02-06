import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import BrowserFrame from "react-browser-frame";
import { useNavigate } from "react-router-dom";
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
  url,
  description,
  info_data: INFO_DATA,
}) => {
  const navigate = useNavigate();

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
                <CustomButton
                  onClick={() => navigate("/contacts")}
                  type="primary"
                  title={"Get demo"}
                />
                <CustomButton
                  onClick={() => navigate("/contacts")}
                  type="default"
                  title={"Contacts"}
                />
              </ButtonsWrapper>
            </LeftSide>
            <RightSide
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              imagePosition={imagePosition}
            >
              <BrowserFrame url={url} padding="0">
                <img src={image} alt="" />
              </BrowserFrame>
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

export const InfoItem = ({ icon, title, description, animation }) => {
  return (
    <InfoBox
      as={motion.div}
      initial={{
        opacity: 0,
        ...(animation === "left"
          ? { x: -60 }
          : animation === "right"
          ? { x: 60 }
          : animation === "bottom"
          ? { y: 60 }
          : animation === "top"
          ? { y: -60 }
          : {}),
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {icon && <InfoIcon src={icon} />}
      <InfoTitle>{title}</InfoTitle>
      {description && (
        <InfoDesc dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </InfoBox>
  );
};
