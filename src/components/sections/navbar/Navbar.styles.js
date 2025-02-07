import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DesktopNavbarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  ${({ isScrolled }) =>
    isScrolled && `box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);`}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  .title {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.colors.text.textSecondary};
    font-family: "Inter";
    font-size: 13px;
    line-height: 20px;
  }
`;

export const ArrowIcon = styled(motion.div)`
  font-size: 20px;
`;

export const DropdownContainer = styled(motion.div)`
  padding-top: 40px;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DropdownMenu = styled(motion.div)`
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #efefef;
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  box-shadow: 0px 16px 48px 0px var(--shadows-drop-1, rgba(22, 25, 29, 0.03)),
    0px 10px 18px 0px var(--shadows-drop-1, rgba(22, 25, 29, 0.03)),
    0px 5px 8px 0px var(--shadows-drop-2, rgba(22, 25, 29, 0.04)),
    0px 2px 4px 0px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  width: 500px;
  padding: 15px;
  border-radius: 16px;
  transition: 0.2s all ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.bgSecondary};
  }
`;

export const DropdownItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DropdownItemTopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DropdownItemTopRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DropdownItemTopRightTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter";
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.24px;
`;

export const DropdownItemTopRightDescription = styled.div`
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.24px;
`;

export const DropdownItemBottom = styled.div`
  margin-top: 20px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #d8d8d8;
  img {
    width: 100%;
    border-radius: 12px;
    transition: 0.2s all ease;
    &:hover {
      transform: scale(1.01);
    }
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter";
  font-size: 13px;
  line-height: 20px;
`;

export const MobileNavbarWrapper = styled.div`
  display: none;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: 0.2s all ease;

  ${({ isScrolled }) =>
    isScrolled &&
    `box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset, 0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));`}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const MobileContent = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Overlay = styled(motion.div)`
  width: 100vw;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const MenuWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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

export const MenuContent = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuItem = styled(Link)`
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
