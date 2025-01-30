import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${({ justify }) => justify};
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 28px;
    align-items: center;
  }
`;

export const TopTitle = styled.div`
  font-family: "Inter";
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: "Inter-Bold";
  font-size: 40px;
  line-height: 48px;

  ${({ justify }) => justify === "center" && "text-align: center;"}
  ${({ mode }) =>
    mode === "light"
      ? css`
          color: ${({ theme }) => theme.colors.text.textPrimary};
        `
      : css`
          color: #fff;
        `}
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
  }
`;

export const Description = styled.div`
  font-family: "Inter-Light";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;
  ${({ justify }) => justify === "center" && "text-align: center;"}

  ${({ mode }) =>
    mode === "light"
      ? css`
          color: ${({ theme }) => theme.colors.text.textSecondary};
        `
      : css`
          color: rgba(255, 255, 255, 0.64);
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

const SectionTitle = ({
  mode = "light",
  justify = "center",
  topTitle = "",
  title,
  description = "",
}) => {
  return (
    <Wrapper justify={justify}>
      {topTitle && <TopTitle dangerouslySetInnerHTML={{ __html: topTitle }} />}
      <Title
        justify={justify}
        mode={mode}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {description && (
        <Description
          justify={justify}
          mode={mode}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Wrapper>
  );
};

export default SectionTitle;
