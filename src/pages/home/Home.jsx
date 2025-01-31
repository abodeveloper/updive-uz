import Features from "@/components/sections/feature";
import ProductsInfo from "@/components/sections/products-info";
import { PageWrapper } from "./Home.styles";
import DlpIcon1 from "@/assets/images/products-info/shield-flash.svg";
import DlpIcon2 from "@/assets/images/products-info/alarm-warning.svg";
import DlpIcon3 from "@/assets/images/products-info/key.svg";
import SiemIcon1 from "@/assets/images/products-info/search.svg";
import SiemIcon2 from "@/assets/images/products-info/code-s-slash-fill.svg";
import SiemIcon3 from "@/assets/images/products-info/flashlight.svg";
import DlpImage from "@/assets/images/products-info/dlp-img.png";
import CybersecurityEfficiency from "@/components/sections/cybersecurity-efficiency";
import Faq from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";

const Home = () => {
  
  const DLP_DATA = {
    image: DlpImage,
    topTitle: "Automation",
    title: "Updive DLP",
    description:
      "Updive DLP (Data Loss Prevention) is a cutting-edge solution designed to safeguard sensitive information, prevent unauthorized access, and ensure compliance with data protection standards. Empower your business with tools to monitor, detect, and mitigate risks, securing your critical assets and maintaining trust.",
    info_data: [
      {
        icon: DlpIcon1,
        title: "Data Monitoring and Protection",
        description:
          "Monitor and protect sensitive data across your organization, preventing unauthorized access and ensuring compliance with security policies.",
      },
      {
        icon: DlpIcon2,
        title: "Real-Time Threat Detection",
        description:
          "Detect and respond to threats in real time using intelligent alerts that minimize risks and reduce potential damage.",
      },
      {
        icon: DlpIcon3,
        title: "Access Control and Encryption",
        description:
          "Strengthen data security by enforcing access controls and encrypting sensitive information across all devices and platforms.",
      },
    ],
  };

  const SIEM_DATA = {
    image: DlpImage,
    topTitle: "Automation",
    title: "Updive SIEM",
    description:
      "Updive SIEM provides advanced security monitoring, real-time threat detection, and comprehensive analysis to safeguard your business infrastructure. With proactive threat identification and seamless integration, Updive SIEM helps you manage, detect, and respond to security incidents before they become serious threats.",
    info_data: [
      {
        icon: SiemIcon1,
        title: "Real-Time Threat Detection",
        description:
          "Identify and respond to security threats instantly with intelligent alerts that minimize potential risks and damage.",
      },
      {
        icon: SiemIcon2,
        title: "Comprehensive Log Management",
        description:
          "Collect, analyze, and securely store logs for better security visibility and to meet industry compliance requirements.",
      },
      {
        icon: SiemIcon3,
        title: "Incident Response Automation",
        description:
          "Automate the process of responding to security incidents, improving response times and reducing human error.",
      },
    ],
  };

  return (
    <PageWrapper>
      <Features />
      <ProductsInfo imagePosition="right" {...DLP_DATA} />
      <ProductsInfo imagePosition="left" {...SIEM_DATA} />
      <CybersecurityEfficiency />
      <Faq />
      <ContactForm />
    </PageWrapper>
  );
};

export default Home;
