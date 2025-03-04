import SectionTitle from "@/components/SectionTitle";
import { get } from "lodash";
import { Container } from "react-bootstrap";
import {
  Content,
  LeftSide,
  RightSide,
  SectionWrapper,
} from "./AboutCompany.styles";
import { motion } from "framer-motion";

const AboutCompany = ({ data }) => {
  return (
    <SectionWrapper>
      <Container>
        <Content imagePosition={get(data, "imagePosition")}>
          <LeftSide imagePosition={get(data, "imagePosition")}>
            <SectionTitle
              justify={"start"}
              topTitle={get(data, "topTitle")}
              title={get(data, "title")}
              description={get(data, "description")}
            />
          </LeftSide>
          <RightSide
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            imagePosition={get(data, "imagePosition")}
          >
            <img src={get(data, "image")} alt="" />
          </RightSide>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default AboutCompany;
