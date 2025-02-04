import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import ContactForm from "@/components/sections/contact-form";
import ContactMap from "@/components/sections/contact-map";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import PageHeader from "@/components/sections/page-header";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        image={HomeHeaderImage}
        title={"Stay Connected with <br/> Updive"}
        description={
          "Reach out to our team for expert guidance, technical support, or <br/> personalized solutions tailored to your business needs."
        }
        imageStyle={{}}
      />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  );
};

export default Contacts;
