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
  MenuContent,
  MenuItem,
  MenuWrapper,
  MobileContent,
  MobileNavbarWrapper,
  Overlay,
  RightSide,
  StyledLink,
  Top,
} from "./Navbar.styles";

import ArrowDown from "@/assets/images/arrow-down.svg";
import MobileLogo from "@/assets/images/mobile-navbar-logo.svg";
import LogoDlp from "@/assets/images/navbar-dlp-logo.svg";
import ServiceImg from "@/assets/images/navbar-service.svg";
import LogoSiem from "@/assets/images/navbar-siem-logo.svg";
import DlpImage from "@/assets/images/product-carousel-images/dlp/dlp-crl-image-1.png";
import SiemImage from "@/assets/images/product-carousel-images/siem/siem-crl-image-1.png";
import ContactImg from "@/assets/images/user-smile.svg";
import CustomButton from "@/components/CustomButton";
import Hamburger from "@/components/Hamburger";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);

    hoverTimer.current = setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px dan keyin shadow qo'shadi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <DesktopNavbarWrapper isScrolled={isScrolled}>
        <Container>
          <Top>
            <LeftSide>
              <img
                src={MobileLogo}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <DropdownWrapper
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="title">
                    Product
                    <ArrowIcon
                      animate={{ rotate: isOpen ? -180 : 0 }}
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
                          <DropdownItem
                            onClick={() => {
                              navigate("/products/dlp");
                              handleMouseLeave();
                            }}
                          >
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
                          <DropdownItem
                            onClick={() => {
                              navigate("/products/siem");
                              handleMouseLeave();
                            }}
                          >
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
                <StyledLink to="/services">Services</StyledLink>
              </div>
            </LeftSide>
            <RightSide>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <CustomButton title={"Request demo"} type="default" />
            </RightSide>
          </Top>
        </Container>
      </DesktopNavbarWrapper>
      <MobileNavbarWrapper isScrolled={isScrolled} isOpenMenu={isOpenMenu}>
        <Container>
          <MobileContent>
            <img src={MobileLogo} alt="Logo" />
            <Hamburger isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
          </MobileContent>
        </Container>

        <AnimatePresence>
          {isOpenMenu && (
            <>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpenMenu(false)}
              />
              <MenuWrapper
                initial={{ y: "-100%" }}
                animate={{ y: 79 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 75 }}
              >
                <Container>
                  <MenuContent>
                    <MenuItem
                      to={"/products/dlp"}
                      className="project"
                      onClick={() => {
                        setIsOpenMenu(false);
                      }}
                    >
                      <div className="left">
                        <img src={LogoDlp} alt="Logo" />
                      </div>
                      <div className="right">
                        <div className="title">Updive DLP</div>
                        <div className="description">
                          Data Leak Prevention System
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      to={"/products/siem"}
                      className="project"
                      onClick={() => {
                        setIsOpenMenu(false);
                      }}
                    >
                      <div className="left">
                        <img src={LogoSiem} alt="Logo" />
                      </div>
                      <div className="right">
                        <div className="title">Updive SIEM</div>
                        <div className="description">
                          Security Information and Event Manager
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      to={"/services"}
                      onClick={() => {
                        setIsOpenMenu(false);
                      }}
                    >
                      <div className="left">
                        <img src={ServiceImg} alt="Logo" />
                      </div>
                      <div className="right">
                        <div className="link">Services</div>
                      </div>
                    </MenuItem>
                    <MenuItem
                      to={"/contacts"}
                      onClick={() => {
                        setIsOpenMenu(false);
                      }}
                    >
                      <div className="left">
                        <img src={ContactImg} alt="Logo" />
                      </div>
                      <div className="right">
                        <div className="link">Contacts</div>
                      </div>
                    </MenuItem>
                    <CustomButton
                      onClick={() => navigate("/contacts")}
                      title={"Request Demo"}
                    />
                  </MenuContent>
                </Container>
              </MenuWrapper>
            </>
          )}
        </AnimatePresence>
      </MobileNavbarWrapper>
    </>
  );
};

export default Navbar;
