import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  min-height: 32px;
  padding: 0 10px;
  transition: 0.2s ease;
  border-radius: 8px;
  border: 0.5px solid rgba(48, 48, 48, 0.2);

  box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
    0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));

  ${({ type }) =>
    type === "primary"
      ? css`
          background: linear-gradient(180deg, #6199ff 0%, #045cfb 100%);
          &:hover {
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.2) 100%
              ),
              linear-gradient(180deg, #6199ff 0%, #045cfb 100%);
          }
        `
      : css`
          background-color: #fff;
          &:hover {
            background-color: #f9f9f9;
          }
        `}
`;

export const BtnTitle = styled.div`
  text-align: center;
  font-family: "Inter";
  font-size: 13px;
  line-height: 20px;

  ${({ type }) =>
    type === "primary"
      ? css`
          color: #fff;
        `
      : css`
          color: ${({ theme }) => theme.colors.text.textPrimary};
        `}
`;

const CustomButton = ({ type = "default", title, children, ...props }) => {
  return (
    <Button type={type} {...props}>
      {title ? <BtnTitle type={type}>{title}</BtnTitle> : children}
    </Button>
  );
};

export default CustomButton;
