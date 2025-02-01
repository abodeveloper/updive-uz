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
import MobileLogo from "@/assets/images/mobile-navbar-logo.svg";
import LogoDlp from "@/assets/images/navbar-dlp-logo.svg";
import {
  default as DlpImage,
  default as SiemImage,
} from "@/assets/images/navbar-dlp.svg";
import Logo from "@/assets/images/navbar-logo.svg";
import LogoSiem from "@/assets/images/navbar-siem-logo.svg";
import ContactImg from "@/assets/images/user-smile.svg";
import CustomButton from "@/components/CustomButton";
import Hamburger from "@/components/Hamburger";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const MenuWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  overflow: hidden;

  border-radius: 0px 0px 12px 12px;
  border-bottom: 1px solid #efefef;
  background: #fff;
  box-shadow: 0px 16px 24px -8px var(--shadows-drop-1, rgba(22, 25, 29, 0.03)),
    0px 8px 12px -4px var(--shadows-drop-2, rgba(22, 25, 29, 0.04)),
    0px 2px 4px 0px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
`;

const MenuContent = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
  display: flex;
  gap: 12px;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: ${({ theme }) => theme.colors.text.textPrimary};
      font-family: "Inter";
      font-size: 20px;
      line-height: 30px;
    }
    .description {
      font-family: "Inter-Light";
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.text.textSecondary};
    }
    .link {
      font-family: "Inter";
      font-size: 18px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.text.textPrimary};
    }
  }
`;

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
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
                transition={{ type: "spring", stiffness: 50 }}
              >
                <Container>
                  <MenuContent>
                    <MenuItem to={"#"} className="project">
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
                    <MenuItem to={"#"} className="project">
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
                    <MenuItem to={"#"} className="project">
                      <div className="left">
                        <img src={ContactImg} alt="Logo" />
                      </div>
                      <div className="right">
                        <div className="link">Contact</div>
                      </div>
                    </MenuItem>
                    <CustomButton title={"Request Demo"} />
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
