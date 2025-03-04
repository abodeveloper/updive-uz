import styled, { css } from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
`;

export const Content = styled.div`
  padding: 120px 0;
  display: flex;
  gap: 32px;

  ${({ imagePosition }) =>
    imagePosition === "left"
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 0;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const RightSide = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;
