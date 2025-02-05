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

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const BottomTop = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text.textPrimary};
  font-family: "Inter-SemiBold";
  font-size: 16px;
  line-height: 24px;
`;

export const BottomText = styled.div`
  color: ${({ theme }) => theme.colors.text.textSecondary};
  font-family: "Inter-Light";
  font-size: 14px;
  line-height: 20px;
`;
