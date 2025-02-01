import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DesktopNavbarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.2s all ease;

  ${({ isScrolled }) =>
    isScrolled &&
    `box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset, 0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));`}

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
    color: rgba(48, 48, 48, 0.64);
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
  position: absolute;
  top: 100%;
  left: 0;
`;

export const DropdownMenu = styled(motion.div)`
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #efefef;
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};
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
  padding: 15px;
  border-radius: 16px;
  transition: 0.2s all ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.bgPrimary};
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
  font-family: "Inter-SemiBold";
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
  gap: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(48, 48, 48, 0.64);
  font-family: "Inter";
  font-size: 13px;
  line-height: 20px;
`;

export const MobileNavbarWrapper = styled.div`
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
