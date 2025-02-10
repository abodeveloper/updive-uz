import { Form } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

export const SectionWrapper = styled.div`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.background.bgSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const Wrapper = styled.div`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }
  to {
    transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
  }
`;

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding: 32px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    padding: 16px;
    padding-top: 40px;
  }

  --offset: 2px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: conic-gradient(transparent 270deg, #70a1ff, transparent);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    width: 100%;
    animation: ${rotate} 10s linear infinite;
    z-index: 0;
  }

  &::after {
    content: "";
    background: inherit;
    border-radius: inherit;
    position: absolute;
    inset: var(--offset);
    height: calc(100% - 2 * var(--offset));
    width: calc(100% - 2 * var(--offset));
    z-index: 0;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    gap: 20px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    gap: 20px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  z-index: 1;

  .form-label {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text.textPrimary};
    font-family: "Inter-SemiBold";
    font-size: 14px;
    line-height: 20px;
  }

  .PhoneInput input {
    width: 100%;
    background-color: transparent;
    border: none;
    &:focus {
      outline: none;
    }
  }

  .form-control {
    padding: 12px 12px;
    border-radius: 8px;
    border: 0.5px solid rgba(48, 48, 48, 0.2);
    background: var(--States-primary-secondary, #fff);
    box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
      0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));

    font-family: "Inter-Light";
    font-size: 14px;
    line-height: 20px;
  }

  .invalid-feedback {
    font-family: "Inter-Light";
    font-size: 12px;
    line-height: 20px;
  }

  .form-control.is-invalid,
  .was-validated .form-control:invalid {
    &:focus {
      box-shadow: none;
    }
  }
`;

export const BottomCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  padding: 32px;
  border-radius: 16px;

  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .left-top {
      display: flex;
      align-items: center;
      gap: 8px;

      .title {
        color: ${({ theme }) => theme.colors.text.textPrimary};
        font-family: "Inter-SemiBold";
        font-size: 16px;
        line-height: 24px;
      }
    }

    .link {
      color: ${({ theme }) => theme.colors.text.textSecondary};
      font-family: "Inter-Light";
      font-size: 14px;
      line-height: 20px;
    }
  }

  .right {
    img {
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`;

export const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;
