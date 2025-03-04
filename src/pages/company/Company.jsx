import About1 from "@/assets/images/about-1.png";
import About2 from "@/assets/images/about-2.png";
import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import AuroraBackground from "@/components/AuroraBackground";
import AboutCompany from "@/components/sections/about-company/AboutCompany";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import OurLeaders from "@/components/sections/our-leaders";
import PageHeader from "@/components/sections/page-header";

const Company = () => {
  const DATA_1 = {
    topTitle: "Cybersecurity",
    title: "About Us",
    description:
      "UPDIVE was founded to provide cybersecurity for government and private organizations. Our first product, DLP, launched in 2020, protects companies from data loss and now holds 60% of Uzbekistan’s market. As digitalization grew, security demand increased across healthcare, finance, government, and other sectors. In 2023, we introduced SIEM, further strengthening cybersecurity for organizations and securing our leadership in Uzbekistan. Now, we are developing XDR for comprehensive protection against evolving cyber threats. Our goal is to safeguard businesses and institutions, ensuring they remain secure in an increasingly digital world.",
    image: About1,
    imagePosition: "right",
  };

  const DATA_2 = {
    topTitle: "Security",
    title: "Our mission and <br/> our goals",
    description:
      "UPDIVE’s mission is to provide innovative cybersecurity solutions that ensure comprehensive protection against evolving threats. We are committed to safeguarding sensitive data, strengthening digital resilience, and delivering robust security across various sectors, including government, private enterprises, healthcare, and finance. By developing cutting-edge technologies, we help organizations defend against cyber risks and maintain operational security. Our goal is to create a safer digital future with reliable, effective solutions that clients can trust. Through continuous innovation and expertise, UPDIVE remains dedicated to protecting businesses and institutions in an increasingly connected world.",
    image: About2,
    imagePosition: "left",
  };

  return (
    <>
      <AuroraBackground>
        <Navbar />
        <PageHeader
          image={HomeHeaderImage}
          title={"Boost your business <br/> efficiency"}
          description={
            "Manage Your Entire Business Ecosystem from a Single Dashboard with <br/> Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs."
          }
          imageStyle={{}}
        />
      </AuroraBackground>
      <AboutCompany data={DATA_1} />
      <AboutCompany data={DATA_2} />
      <OurLeaders />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Company;
