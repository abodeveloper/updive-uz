import Instagram from '@/assets/images/footer-icons/instagram-fill.svg';
import Telegram from '@/assets/images/footer-icons/telegram-fill.svg';
import Twitter from '@/assets/images/footer-icons/twitter-x-fill.svg';
import Youtube from '@/assets/images/footer-icons/youtube-fill.svg';
import Logo from "@/assets/images/footer-logo.svg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Bottom,
  BottomLeftText,
  BottomRightWrapper,
  MenuWrapper,
  SectionWrapper,
  Top,
  Wrapper,
  WrapperBottom
} from "./Footer.styles";

const Footer = () => {
  return (
    <SectionWrapper>
      <Top>
        <Container>
          <Wrapper>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <MenuWrapper>
              <Link to={"/products/dlp"}>Updive DLP</Link>
              <Link to={"/products/siem"}>Updive SIEM</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/contacts"}>Contacts</Link>
            </MenuWrapper>
          </Wrapper>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <WrapperBottom>
            <BottomLeftText>All Rights Reserved © 2025</BottomLeftText>
            <BottomRightWrapper>
              <a href="#" target="_blank">
                <img src={Telegram} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={Instagram} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={Youtube} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={Twitter} alt="" />
              </a>
            </BottomRightWrapper>
          </WrapperBottom>
        </Container>
      </Bottom>
    </SectionWrapper>
  );
};

export default Footer;
