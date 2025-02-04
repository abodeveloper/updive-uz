import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import { Map, SectionWrapper, Wrapper } from "./ContactMap.styles";

const ContactMap = () => {
  return (
    <SectionWrapper>
      <Container>
        <Wrapper>
          <SectionTitle
            justify="start"
            topTitle="Automation"
            title="Boost your business efficiency"
            description={
              "Manage Your Entire Business Ecosystem from a Single Dashboard with Our Scalable, Cloud-Based SaaS Solution Tailored to Your Needs."
            }
          />
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5992.685095372663!2d69.28517449683451!3d41.32316409219855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1738561551420!5m2!1sru!2s"
              height="400"
              style={{ border: 0 }}
              allowfullscreen={true}
              loading="lazy"
            />
          </Map>
        </Wrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ContactMap;
