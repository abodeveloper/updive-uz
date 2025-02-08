import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import AuroraBackground from "@/components/AuroraBackground";
import BusinessEfficiency from "@/components/sections/business-efficiency";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import PageHeader from "@/components/sections/page-header";

const Services = () => {
  return (
    <>
      <AuroraBackground>
        <Navbar />
        <PageHeader
          image={HomeHeaderImage}
          title={"Unleashing the Power <br/> of Updive"}
          description={
            "Discover the key features that make Updive the ultimate solution for <br/> robust, efficient, and intelligent security management."
          }
          imageStyle={{}}
        />
      </AuroraBackground>
      <BusinessEfficiency />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Services;
