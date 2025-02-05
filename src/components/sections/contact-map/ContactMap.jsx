import Address from "@/assets/images/map-pin-5.svg";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "react-bootstrap";
import {
  Bottom,
  BottomText,
  BottomTop,
  Map,
  SectionWrapper,
  Text,
  Wrapper,
} from "./ContactMap.styles";

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
              "Manage Your Entire Business Ecosystem from a Single Dashboard with Our Scalable, <br/> Cloud-Based SaaS Solution Tailored to Your Needs."
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
          <Bottom>
            <BottomTop>
              <img src={Address} alt="" />
              <Text>Address</Text>
            </BottomTop>
            <BottomText>Niyozbek Yuli Street 3rd Drive 6A, 100000, Toshkent</BottomText>
          </Bottom>
        </Wrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ContactMap;
