import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.bgPrimary};
  box-shadow: 0px -0.5px 0px 0px rgba(22, 25, 29, 0.12) inset,
    0px 1px 2px -0.5px var(--shadows-drop-2, rgba(22, 25, 29, 0.04));
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const Map = styled.div`
  iframe {
    width: 100%;
    border-radius: 16px;
    border: 1px solid #efefef;
  }
`;
