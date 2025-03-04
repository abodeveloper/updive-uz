import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import PageHeader from "@/components/sections/page-header";
import ProductCarousel from "@/components/sections/product-carousel";
import ProductFeature from "@/components/sections/product-feature";
import ProductNumbers from "@/components/sections/product-numbers";
import { get } from "lodash";

import SiemHeaderImage from "@/assets/images/siem-header-image.svg";

import SiemCarouselImage1 from "@/assets/images/product-carousel-images/siem/siem-crl-image-1.png";
import SiemCarouselImage2 from "@/assets/images/product-carousel-images/siem/siem-crl-image-2.png";
import SiemCarouselImage3 from "@/assets/images/product-carousel-images/siem/siem-crl-image-3.png";
import SiemCarouselImage4 from "@/assets/images/product-carousel-images/siem/siem-crl-image-4.png";
import SiemFeatureIcon2 from "@/assets/images/product-feature-icons/alarm-warning.svg";
import SiemFeatureIcon1 from "@/assets/images/product-feature-icons/bar-chart-fill.svg";
import SiemFeatureIcon3 from "@/assets/images/product-feature-icons/link.svg";
import SiemFeatureIcon5 from "@/assets/images/product-feature-icons/settings-6.svg";
import SiemFeatureIcon4 from "@/assets/images/product-feature-icons/shield-flash.svg";
import SiemFeatureIcon6 from "@/assets/images/product-feature-icons/tree.svg";
import AuroraBackground from "@/components/AuroraBackground";

const Siem = () => {
  const data = {
    image: SiemHeaderImage,
    title: "Centralized Security, Simplified <br/> Management",
    description:
      "Monitor, analyze, and respond to threats in real time with Updive SIEM’s intelligent, unified security platform.",
    features: {
      topTitle: "Intelligent Management ",
      title: "Powerful Features That <br/> Redefine Security",
      description:
        "Explore the innovative capabilities of Updive SIEM, designed to <br/> strengthen protection and simplify your security operations.",
      info_data: [
        {
          icon: SiemFeatureIcon1,
          title: "Centralized Log Management",
          description:
            "Collect, store, and analyze logs from all your systems in one place for streamlined security operations.",
        },
        {
          icon: SiemFeatureIcon2,
          title: "Real-Time Threat Detection",
          description:
            "Instantly detect suspicious activities with real-time monitoring and automated alerts for faster incident response.",
        },
        {
          icon: SiemFeatureIcon3,
          title: "Advanced Analytics and Correlation",
          description:
            "Use advanced algorithms to correlate events and uncover hidden patterns for better threat intelligence and response.",
        },
        {
          icon: SiemFeatureIcon4,
          title: "Compliance Reporting Made Easy",
          description:
            "Generate detailed compliance reports effortlessly to meet industry standards and regulatory requirements with ease.",
        },
        {
          icon: SiemFeatureIcon5,
          title: "Incident Response Automation",
          description:
            "Automate responses to incidents and reduce resolution times with preconfigured workflows and actionable insights.",
        },
        {
          icon: SiemFeatureIcon6,
          title: "Scalability for Growing Needs",
          description:
            "Scale your SIEM capabilities seamlessly to handle increasing data volumes and evolving security requirements.",
        },
      ],
    },
    numbers: {
      topTitle: "System Efficiency",
      title: "Updive SIEM by the <br/> Numbers",
      description:
        "Explore impactful metrics that showcase Updive SIEM’s efficiency in detecting threats and safeguarding your infrastructure.",
      left: {
        topTitle: "Up to",
        title: "Security Events Processed Daily",
        number: "1",
        suffix: "M",
        description:
          "Gain confidence with Updive SIEM, analyzing and managing over 1 million security events every single day.",
      },
      center: {
        topTitle: "Up to",
        title: "Threat Response Efficiency",
        number: "99.9",
        suffix: "%",
        description:
          "Our platform ensures a 99.9% efficiency in responding to threats, minimizing risks and maintaining your business integrity.",
      },
      right: {
        topTitle: "Up to",
        title: "Support Available",
        number: "24/7",
        description:
          "Our dedicated support team is here for you anytime, providing expert assistance to secure your infrastructure.",
      },
    },
    url: "siem.updive.uz",
    images: [
      SiemCarouselImage1,
      SiemCarouselImage2,
      SiemCarouselImage3,
      SiemCarouselImage4,
    ],
  };

  return (
    <>
      <AuroraBackground>
        <Navbar />
        <PageHeader
          image={get(data, "image")}
          title={get(data, "title")}
          description={get(data, "description")}
        />
      </AuroraBackground>

      <ProductCarousel
        images={get(data, "images", [])}
        url={get(data, "url")}
      />
      <ProductFeature data={get(data, "features", {})} />
      <ProductNumbers data={get(data, "numbers", {})} />
      <Footer />
    </>
  );
};

export default Siem;
