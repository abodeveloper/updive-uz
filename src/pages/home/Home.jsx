import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import DlpImage from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-1.png";
import SiemImage from "@/assets/images/product-carousel-images/siem/siem-crl-image-1.png";
import DlpIcon2 from "@/assets/images/products-info/alarm-warning.svg";
import SiemIcon2 from "@/assets/images/products-info/code-s-slash-fill.svg";
import SiemIcon3 from "@/assets/images/products-info/flashlight.svg";
import DlpIcon3 from "@/assets/images/products-info/key.svg";
import SiemIcon1 from "@/assets/images/products-info/search.svg";
import DlpIcon1 from "@/assets/images/products-info/shield-flash.svg";
import ContactForm from "@/components/sections/contact-form";
import CybersecurityEfficiency from "@/components/sections/cybersecurity-efficiency";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/feature";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import PageHeader from "@/components/sections/page-header";
import PartnersCarousel from "@/components/sections/partners-carousel";
import ProductsInfo from "@/components/sections/products-info";
import { PageWrapper } from "./Home.styles";

const Home = () => {
  const DLP_DATA = {
    image: DlpImage,
    topTitle: "Automation",
    title: "Updive DLP",
    url: "updive-dlp.uz",
    description:
      "Updive DLP (Data Loss Prevention) is a cutting-edge solution designed to safeguard sensitive information, prevent unauthorized access, and ensure compliance with data protection standards. Empower your business with tools to monitor, detect, and mitigate risks, securing your critical assets and maintaining trust.",
    info_data: [
      {
        animation: "bottom",
        icon: DlpIcon1,
        title: "Data Monitoring and Protection",
        description:
          "Monitor and protect sensitive data across your organization, preventing unauthorized access and ensuring compliance with security policies.",
      },
      {
        animation: "bottom",
        icon: DlpIcon2,
        title: "Real-Time Threat Detection",
        description:
          "Detect and respond to threats in real time using intelligent alerts that minimize risks and reduce potential damage.",
      },
      {
        animation: "bottom",
        icon: DlpIcon3,
        title: "Access Control and Encryption",
        description:
          "Strengthen data security by enforcing access controls and encrypting sensitive information across all devices and platforms.",
      },
    ],
  };

  const SIEM_DATA = {
    url: "updive-siem.uz",
    image: SiemImage,
    topTitle: "Automation",
    title: "Updive SIEM",
    description:
      "Updive SIEM provides advanced security monitoring, real-time threat detection, and comprehensive analysis to safeguard your business infrastructure. With proactive threat identification and seamless integration, Updive SIEM helps you manage, detect, and respond to security incidents before they become serious threats.",
    info_data: [
      {
        animation: "bottom",
        icon: SiemIcon1,
        title: "Real-Time Threat Detection",
        description:
          "Identify and respond to security threats instantly with intelligent alerts that minimize potential risks and damage.",
      },
      {
        animation: "bottom",
        icon: SiemIcon2,
        title: "Comprehensive Log Management",
        description:
          "Collect, analyze, and securely store logs for better security visibility and to meet industry compliance requirements.",
      },
      {
        animation: "bottom",
        icon: SiemIcon3,
        title: "Incident Response Automation",
        description:
          "Automate the process of responding to security incidents, improving response times and reducing human error.",
      },
    ],
  };

  return (
    <PageWrapper>
      <Navbar />
      <PageHeader
        image={HomeHeaderImage}
        title={"Protect Your Business with <br/> Confidence"}
        description={
          "Comprehensive Solutions to Shield Your Operations from <br/> Modern Threats"
        }
        imageStyle={{}}
      />
      <PartnersCarousel />
      <Features />
      <ProductsInfo background="primary" imagePosition="right" {...DLP_DATA} />
      <ProductsInfo
        background="secondary"
        imagePosition="left"
        {...SIEM_DATA}
      />
      <CybersecurityEfficiency />
      <Faq />
      <ContactForm />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
