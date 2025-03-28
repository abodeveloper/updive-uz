import Person1 from "@/assets/images/team/team-person-1.png";
import Person2 from "@/assets/images/team/team-person-2.png";
import Person3 from "@/assets/images/team/team-person-3.jpg";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import {
  Bottom,
  InfoBox,
  InfoDesc,
  InfoIcon,
  InfoPosition,
  InfoTitle,
  InfoWrapper,
  SectionWrapper,
  Top,
} from "./OurLeaders.styles";

const OurLeaders = () => {
  const INFO_DATA = [
    {
      icon: Person1,
      name: "Nadir Zaitov",
      position: "Founder & CEO",
      description:
        "Nadir has 20 years of experience in Information Technology, Cybersecurity and Managment. He is the father of our main goals and values. He is on leading our team to deliver cutting-edge solutions that empower our clients to stay ahead in an increasingly digital and secure world.",
    },
    {
      icon: Person2,
      name: "Otabek Aliev",
      position: "CDO",
      description:
        "Otabek focus on developing and implementing digital strategies that enhance the efficiency and security of our solutions. His goal is to provide our clients with innovative and reliable technologies that enable them to successfully navigate the rapidly evolving digital landscape.",
    },
    {
      icon: Person3,
      name: "Shavkat Khomidov",
      position: "CTO",
      description:
        "Shavkat has 8 years of experience in Cybersecurity. He dedicated to overseeing the development and implementation of advanced technological solutions that drive our business forward. His focus is on fostering innovation, ensuring the highest standards of security, and aligning our technology strategies with the evolving needs of our clients.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Top className="top">
          <SectionTitle
            title="Meet our leaders"
            description={
              "The smartest people work every day to <br/> provide the best service and to make our clients happy"
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

export default OurLeaders;

export const InfoItem = ({ icon, name, position, description }) => {
  return (
    <>
      <InfoBox
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {icon && <InfoIcon src={icon} />}
        <InfoTitle>{name}</InfoTitle>
        <InfoPosition>{position}</InfoPosition>
        {description && <InfoDesc>{description}</InfoDesc>}
      </InfoBox>
    </>
  );
};
