import { Container } from "react-bootstrap";
import {
  ArrowIcon,
  DesktopNavbarWrapper,
  DropdownContainer,
  DropdownItem,
  DropdownItemBottom,
  DropdownItemTop,
  DropdownItemTopLeft,
  DropdownItemTopRight,
  DropdownItemTopRightDescription,
  DropdownItemTopRightTitle,
  DropdownMenu,
  DropdownWrapper,
  LeftSide,
  MobileContent,
  MobileNavbarWrapper,
  RightSide,
  StyledLink,
  Top,
} from "./Navbar.styles";

import ArrowDown from "@/assets/images/arrow-down.svg";
import LogoDlp from "@/assets/images/navbar-dlp-logo.svg";
import {
  default as DlpImage,
  default as SiemImage,
} from "@/assets/images/navbar-dlp.svg";
import Logo from "@/assets/images/navbar-logo.svg";
import MobileLogo from "@/assets/images/mobile-navbar-logo.svg";
import LogoSiem from "@/assets/images/navbar-siem-logo.svg";
import CustomButton from "@/components/CustomButton";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "@/components/Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px dan keyin shadow qo'shadi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <DesktopNavbarWrapper isScrolled={isScrolled}>
        <Container>
          <Top>
            <LeftSide>
              <img src={Logo} alt="" />
              <DropdownWrapper
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="title">
                  Product
                  <ArrowIcon
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={ArrowDown} alt="" />
                  </ArrowIcon>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <DropdownContainer>
                      <DropdownMenu
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DropdownItem>
                          <DropdownItemTop>
                            <DropdownItemTopLeft>
                              <img src={LogoDlp} alt="" />
                            </DropdownItemTopLeft>
                            <DropdownItemTopRight>
                              <DropdownItemTopRightTitle>
                                Updive DLP
                              </DropdownItemTopRightTitle>
                              <DropdownItemTopRightDescription>
                                Data Leak Prevention System
                              </DropdownItemTopRightDescription>
                            </DropdownItemTopRight>
                          </DropdownItemTop>
                          <DropdownItemBottom>
                            <img src={DlpImage} alt="" />
                          </DropdownItemBottom>
                        </DropdownItem>
                        <DropdownItem>
                          <DropdownItemTop>
                            <DropdownItemTopLeft>
                              <img src={LogoSiem} alt="" />
                            </DropdownItemTopLeft>
                            <DropdownItemTopRight>
                              <DropdownItemTopRightTitle>
                                Updive SIEM
                              </DropdownItemTopRightTitle>
                              <DropdownItemTopRightDescription>
                                Security Information and Event Manager
                              </DropdownItemTopRightDescription>
                            </DropdownItemTopRight>
                          </DropdownItemTop>
                          <DropdownItemBottom>
                            <img src={SiemImage} alt="" />
                          </DropdownItemBottom>
                        </DropdownItem>
                      </DropdownMenu>
                    </DropdownContainer>
                  )}
                </AnimatePresence>
              </DropdownWrapper>
            </LeftSide>
            <RightSide>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <CustomButton title={"Request demo"} type="default" />
            </RightSide>
          </Top>
        </Container>
      </DesktopNavbarWrapper>
      <MobileNavbarWrapper>
        <Container>
          <MobileContent>
            <img src={MobileLogo} alt="" />
            <Hamburger/>
          </MobileContent>
        </Container>
      </MobileNavbarWrapper>
    </>
  );
};

export default Navbar;
