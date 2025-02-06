import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { get } from "lodash";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import ReactVisibilitySensor from "react-visibility-sensor";
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

  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Container>
        <Top>
          <SectionTitle
            topTitle={topTitle}
            title={title}
            description={description}
          />
          <CustomButton
            onClick={() => navigate("/contacts")}
            type="primary"
            title={"Get started"}
          />
        </Top>
        <Bottom>
          <InfoWrapper>
            <InfoBox>
              <InfoTopTitle>{get(left, "topTitle")}</InfoTopTitle>
              <InfoNumber>
                <CountUp
                  start={0}
                  end={get(left, "number")}
                  duration={2}
                  separator=" "
                  suffix={get(left, "suffix")}
                  className="count"
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <>
                        <span ref={countUpRef} className="count" />
                      </>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </InfoNumber>
              <InfoTitle>{get(left, "title")}</InfoTitle>
              <InfoDesc>{get(left, "description")}</InfoDesc>
            </InfoBox>
            <Seperator />
            <InfoBox>
              <InfoTopTitle>{get(center, "topTitle")}</InfoTopTitle>
              <InfoNumber>
                <CountUp
                  start={0}
                  end={get(center, "number")}
                  duration={2}
                  separator=" "
                  decimals={1}
                  suffix={get(center, "suffix")}
                  className="count"
                  redraw={true}
                >
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <>
                        <span ref={countUpRef} className="count" />
                      </>
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </InfoNumber>
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
