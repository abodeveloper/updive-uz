import Arrow from "@/assets/images/arrow-right.svg";
import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
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
} from "./CybersecurityEfficiency.styles";

const CybersecurityEfficiency = () => {
  return (
    <SectionWrapper>
      <Container>
        <Top>
          <SectionTitle
            mode="dark"
            topTitle="Automation"
            title="Boost Your Cybersecurity <br/> Efficiency"
            description={
              "Manage Your Organization's Security Ecosystem from a Single <br/> Dashboard with Updive's Scalable, Cloud-Based Cybersecurity Solution <br/> Tailored to Your Needs."
            }
          />
          <CustomButton>
            Get in touch <img src={Arrow} alt="" />
          </CustomButton>
        </Top>
        <Bottom>
          <InfoWrapper>
            <InfoBox>
              <InfoTopTitle>Up to</InfoTopTitle>
              <InfoNumber>
                <CountUp
                  start={0}
                  end={500}
                  duration={2}
                  separator=" "
                  suffix={"K"}
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
              <InfoTitle>Threats Prevented</InfoTitle>
              <InfoDesc>
                Protect your business by preventing over 500,000 cyber threats
                every day, using our advanced threat detection and proactive
                security measures.
              </InfoDesc>
            </InfoBox>
            <Seperator />
            <InfoBox>
              <InfoTopTitle>Up to</InfoTopTitle>
              <InfoNumber>
                <CountUp
                  start={0}
                  end={99.9}
                  duration={2}
                  decimals={1}
                  separator=" "
                  suffix={"%"}
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
              <InfoTitle>Threat Response Time</InfoTitle>
              <InfoDesc>
                Our platform guarantees a 99.9% response rate to threats,
                ensuring rapid action and minimizing potential damage from
                cyberattacks and vulnerabilities.
              </InfoDesc>
            </InfoBox>
          </InfoWrapper>
        </Bottom>
      </Container>
    </SectionWrapper>
  );
};

export default CybersecurityEfficiency;
