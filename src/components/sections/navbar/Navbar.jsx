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
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "@/components/Hamburger";
import styled from "styled-components";

// const MobileNavbarWrapper = styled.div`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   left: 0;
//   background: white;
//   z-index: 1000;
//   box-shadow: ${({ isScrolled }) =>
//     isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
// `;

// const MobileContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px 20px;
// `;

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
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #007bff;
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
                animate={{ y: 80 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <MenuContent>
                  <MenuItem href="#">Home</MenuItem>
                  <MenuItem href="#">About</MenuItem>
                  <MenuItem href="#">Services</MenuItem>
                  <MenuItem href="#">Contact</MenuItem>
                </MenuContent>
              </MenuWrapper>
            </>
          )}
        </AnimatePresence>
      </MobileNavbarWrapper>
    </>
  );
};

export default Navbar;
