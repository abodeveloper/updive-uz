import Icon4 from "@/assets/images/services-icons/code-s-slash-fill.svg";
import Icon1 from "@/assets/images/services-icons/flow-chart.svg";
import Icon5 from "@/assets/images/services-icons/node-tree.svg";
import Icon6 from "@/assets/images/services-icons/service.svg";
import Icon2 from "@/assets/images/services-icons/shield-check.svg";
import Icon3 from "@/assets/images/services-icons/terminal-window.svg";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import {
  Bottom,
  InfoBox,
  InfoDesc,
  InfoIcon,
  InfoTitle,
  InfoWrapper,
  SectionWrapper,
  Top,
} from "./BusinessEfficiency.styles";

const BusinessEfficiency = () => {
  const INFO_DATA = [
    {
      icon: Icon1,
      title: "Customization of solutions",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
    {
      icon: Icon2,
      title: "Cybersecurity consulting",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
    {
      icon: Icon3,
      title: "Managed Security Services",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
    {
      icon: Icon4,
      title: "Endpoint protection",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
    {
      icon: Icon5,
      title: "Security awareness training",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
    {
      icon: Icon6,
      title: "24/7 support",
      description:
        "Our platform offers robust analytics, real-time collaboration, and scalable features to grow with your business at every stage.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Top>
          <SectionTitle
            justify="start"
            topTitle="Automation"
            title="Boost your business <br/> efficiency"
            description={
              "Manage Your Entire Business Ecosystem from a Single Dashboard with <br/> Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs."
            }
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

export default BusinessEfficiency;

export const InfoItem = ({ icon, title, description }) => {
  return (
    <>
      <InfoBox>
        {icon && <InfoIcon src={icon} />}
        <InfoTitle>{title}</InfoTitle>
        {description && <InfoDesc>{description}</InfoDesc>}
      </InfoBox>
    </>
  );
};
