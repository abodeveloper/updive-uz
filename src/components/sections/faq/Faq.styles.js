import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
`;

export const Top = styled.div`
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const Bottom = styled.div`
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 48px;
  }
`;

export const StyledAccordion = styled(Accordion)`
  width: 570px;
  .accordion-button {
    background: none !important; // Background olib tashlash
    border: none !important; // Border olib tashlash
    box-shadow: none !important; // Focus bo‘lganda shadow chiqmasligi uchun

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;

    color: ${({ theme }) => theme.colors.text.textPrimary};
    font-family: "Inter-SemiBold";
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.16px;

    &:focus {
      outline: none !important; // Default outline olib tashlash
    }

    &::after {
      display: none; // Bootstrap'ning default collapse iconini yo‘q qilish
    }

    .icon {
      display: flex;
      align-items: center;
      margin-left: auto;
      transition: transform 0.3s ease;

      .plus-icon {
        transform: rotate(0);
        transition: transform 0.3s ease;
      }
    }
  }
  .accordion-button:not(.collapsed) {
    .plus-icon {
      transform: rotate(45deg);
    }
  }
  .accordion-item {
    margin-top: 12px;
    border-radius: 12px;
    border: 0.5px solid rgba(48, 48, 48, 0.2);
    background: #fff;
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));

    .accordion-body {
      color: ${({ theme }) => theme.colors.text.textSeondary};
      font-family: "Inter-Light";
      font-size: 14px;
      line-height: 20px;
      padding-top: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
