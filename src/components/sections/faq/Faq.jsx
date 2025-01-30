import PlusImg from "@/assets/images/add.svg";
import SectionTitle from "@/components/SectionTitle";
import { Accordion, Container } from "react-bootstrap";
import { Bottom, SectionWrapper, StyledAccordion, Top } from "./Faq.styles";

const Faq = () => {
  const FAQ_DATA = [
    {
      title: "What is Updive and how can it benefit my business?",
      description:
        "Updive is a cloud-based cybersecurity and data protection platform that provides comprehensive solutions to secure your business data, monitor threats in real-time, and ensure compliance with industry regulations. It helps streamline your operations while safeguarding your digital assets from cyber threats.",
    },
    {
      title: "How does Updive protect my business from cyber threats?",
      description:
        "Updive uses advanced algorithms to detect and prevent cyberattacks, data breaches, and other malicious activities in real-time. Our platform combines proactive monitoring, threat detection, and automatic response systems to minimize risks and ensure the security of your data.",
    },
    {
      title: "What are the main features of Updive?",
      description:
        "Advanced Threat Detection: Real-time identification of potential security risks. <br/>Data Loss Prevention (DLP): Secure your sensitive data with automated controls. <br/>SIEM Integration: Seamlessly integrates with your existing infrastructure to provide comprehensive security insights. <br/>Cloud-Based Architecture: Scalable and flexible to meet the unique needs of your business.",
    },
    {
      title: "Is Updive suitable for small businesses?",
      description:
        "Yes, Updive is designed to cater to businesses of all sizes. Whether you’re a startup or an enterprise, our platform offers scalable solutions that grow with your business needs, ensuring that your data remains secure as you expand.",
    },
    {
      title: "How can I get started with Updive?",
      description:
        "Getting started with Updive is simple. Just sign up through our website, choose a plan that suits your business needs, and follow our easy setup guide. Our team will provide support throughout the process to ensure a seamless integration.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <Top className="top">
          <SectionTitle
            topTitle="Got Questions ?"
            title="Everything You Need to <br/> Know, All in One Place"
            description={
              "Discover quick and comprehensive answers to common questions about <br/> our company, services, and features."
            }
          />
        </Top>
        <Bottom>
          <StyledAccordion defaultActiveKey="1">
            {FAQ_DATA.map((item, index) => (
              <Accordion.Item key={index} eventKey={String(index)}>
                <Accordion.Header>
                  <Accordion.Button>
                    {item.title}
                    <span className="icon">
                      <img src={PlusImg} className="plus-icon" />
                    </span>
                  </Accordion.Button>
                </Accordion.Header>
                <Accordion.Body
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Accordion.Item>
            ))}
          </StyledAccordion>
        </Bottom>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
