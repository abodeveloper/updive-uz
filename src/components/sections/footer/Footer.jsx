import Logo from "@/assets/images/footer-logo.svg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Bottom,
  BottomText,
  MenuWrapper,
  SectionWrapper,
  Top,
} from "./Footer.styles";

const Footer = () => {
  return (
    <SectionWrapper>
      <Top>
        <Container>
          <MenuWrapper>
            <ul>
              <li>
                <img src={Logo} alt="" />
              </li>
              <li>
                <div className="address">Uzbekistan, Tashkent</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="head">Product</div>
              </li>
              <li>
                <Link to={"#"}>Updive DLP</Link>
              </li>
              <li>
                <Link to={"#"}>Updive SIEM</Link>
              </li>
            </ul>
            <ul>
              <li>
                <div className="head">Social medias</div>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
            </ul>
          </MenuWrapper>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <BottomText>All Rights Reserved © 2025</BottomText>
        </Container>
      </Bottom>
    </SectionWrapper>
  );
};

export default Footer;
