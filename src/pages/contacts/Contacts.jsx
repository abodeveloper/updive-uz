import HomeHeaderImage from "@/assets/images/home-header-image.svg";
import ContactForm from "@/components/sections/contact-form";
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
        imageStyle={{
          boxShadow: `0px 62px 17px 0px rgba(0, 0, 0, 0.00), 0px 40px 16px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.07), 0px 10px 10px 0px rgba(0, 0, 0, 0.13), 0px 2px 5px 0px rgba(0, 0, 0, 0.14)`
        }}
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contacts;
