import Icon4 from "@/assets/images/feature-icons/code-block.svg";
import Icon1 from "@/assets/images/feature-icons/line-chart.svg";
import Icon3 from "@/assets/images/feature-icons/settings-6.svg";
import Icon5 from "@/assets/images/feature-icons/shield-check.svg";
import Icon2 from "@/assets/images/feature-icons/time.svg";
import Icon6 from "@/assets/images/feature-icons/user-heart.svg";
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
} from "./Features.styles";

const Features = () => {
  const INFO_DATA = [
    {
      icon: Icon1,
      title: "Advanced Analytics",
      description:
        "Transform raw data into actionable insights with cutting-edge analytics tools tailored to your business needs.",
    },
    {
      icon: Icon2,
      title: "Real-Time Monitoring",
      description:
        "Stay informed around the clock with intelligent monitoring systems that enhance efficiency and prevent unexpected disruptions.",
    },
    {
      icon: Icon3,
      title: "Custom Solutions",
      description:
        "Benefit from solutions designed specifically for your industry, ensuring maximum effectiveness and alignment with your goals.",
    },
    {
      icon: Icon4,
      title: "Scalable Architecture",
      description:
        "Adapt to growing demands effortlessly with systems that scale to meet your business's evolving requirements and size.",
    },
    {
      icon: Icon5,
      title: "Enhanced Security",
      description:
        "Safeguard your business with top-tier security measures that proactively manage threats and ensure data integrity.",
    },
    {
      icon: Icon6,
      title: "User-Friendly Interface",
      description:
        "Boost productivity and satisfaction through intuitive interfaces designed to simplify workflows and improve overall user experience.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Top className="top">
          <SectionTitle
            topTitle="Automation"
            title="Empowering Your Business <br/> with Unmatched Features"
            description={
              "Discover six powerful tools designed to streamline operations, enhance <br/> security, and drive your business toward success."
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

export default Features;

export const InfoItem = ({ icon, title, description }) => {
  return (
    <InfoBox>
      {icon && <InfoIcon src={icon} />}
      <InfoTitle>{title}</InfoTitle>
      {description && <InfoDesc>{description}</InfoDesc>}
    </InfoBox>
  );
};
