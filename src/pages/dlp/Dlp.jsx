import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import PageHeader from "@/components/sections/page-header";
import ProductCarousel from "@/components/sections/product-carousel";
import ProductFeature from "@/components/sections/product-feature";
import ProductNumbers from "@/components/sections/product-numbers";
import { get } from "lodash";

import DlpHeaderImage from "@/assets/images/dlp-header-image.svg";

import DlpFeatureIcon2 from "@/assets/images/product-feature-icons/alarm-warning.svg";
import DlpFeatureIcon6 from "@/assets/images/product-feature-icons/checkbox-multiple.svg";
import DlpFeatureIcon4 from "@/assets/images/product-feature-icons/file-copy-2.svg";
import DlpFeatureIcon5 from "@/assets/images/product-feature-icons/folder.svg";
import DlpFeatureIcon3 from "@/assets/images/product-feature-icons/key.svg";
import DlpFeatureIcon1 from "@/assets/images/product-feature-icons/search.svg";

import DlpCarouselImage1 from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-1.png";
import DlpCarouselImage2 from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-2.png";
import DlpCarouselImage3 from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-3.png";
import DlpCarouselImage4 from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-4.png";

const Dlp = () => {
  const data = {
    image: DlpHeaderImage,
    title: "Safeguard Your Data, <br/> Strengthen Your Security",
    description:
      "Prevent data breaches, monitor sensitive information, and <br/> ensure compliance with Updive DLP’s advanced protection and control solutions.",
    features: {
      topTitle: "Automation",
      title: "Discover the Features That <br/> Set Updive Apart",
      description:
        "Explore six powerful tools designed to enhance security, streamline <br/> operations, and drive your business toward success.",
      info_data: [
        {
          icon: DlpFeatureIcon1,
          title: "Advanced Data Monitoring",
          description:
            "Continuously track sensitive data across networks, devices, and endpoints to prevent unauthorized access or breaches.",
        },
        {
          icon: DlpFeatureIcon2,
          title: "Real-Time Threat Detection",
          description:
            "Instantly identify suspicious activities and mitigate risks with intelligent alerts and automated threat response tools.",
        },
        {
          icon: DlpFeatureIcon3,
          title: "Granular Access Control",
          description:
            "Set precise access permissions for users, ensuring sensitive data is only available to authorized personnel.",
        },
        {
          icon: DlpFeatureIcon4,
          title: "Automated Data Classification",
          description:
            "Automatically categorize sensitive data by type and importance, improving management and ensuring compliance with regulations.",
        },
        {
          icon: DlpFeatureIcon5,
          title: "Secure File Sharing",
          description:
            "Protect sensitive information during file sharing by encrypting data and monitoring sharing activities in real time.",
        },
        {
          icon: DlpFeatureIcon6,
          title: "Compliance and Reporting",
          description:
            "Implify regulatory compliance with detailed audits, real-time reporting, and insights into your organization's data protection.",
        },
      ],
    },
    numbers: {
      topTitle: "Automation",
      title: "Updive DLP by the <br/> Numbers",
      description:
        "Explore key metrics that showcase our commitment to cybersecurity, <br/> reliability, and the unparalleled performance of our solutions.",
      left: {
        topTitle: "Up to",
        title: "Sensitive Data Incidents Prevented",
        number: "500",
        suffix: "K",
        description:
          "Join a growing community that trusts Updive DLP to block over 500,000 sensitive data breaches and incidents every day.",
      },
      center: {
        topTitle: "Up to",
        title: "Threat Detection Accuracy",
        number: "99.9",
        suffix: "%",
        description:
          "Our platform delivers a 99.9% threat detection rate, ensuring that your sensitive data is always protected from risks.",
      },
      right: {
        topTitle: "Up to",
        title: "Support Available",
        number: "24/7",
        description:
          "Our expert support team is available around the clock to help you safeguard your data and address any security concerns.",
      },
    },
    url: "updive-dlp.uz",
    images: [
      DlpCarouselImage1,
      DlpCarouselImage2,
      DlpCarouselImage3,
      DlpCarouselImage4,
    ],
  };

  return (
    <>
      <Navbar />
      <PageHeader
        image={get(data, "image")}
        title={get(data, "title")}
        description={get(data, "description")}
      />
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

export default Dlp;
