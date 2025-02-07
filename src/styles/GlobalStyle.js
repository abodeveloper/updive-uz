import InterBoldTtf from "@/styles/fonts/Inter/static/Inter-Bold.ttf";
import InterExtraLightTtf from "@/styles/fonts/Inter/static/Inter-ExtraLight.ttf";
import InterLightTtf from "@/styles/fonts/Inter/static/Inter-Light.ttf";
import InterRegularTtf from "@/styles/fonts/Inter/static/Inter-Regular.ttf";
import InterSemiBoldTtf from "@/styles/fonts/Inter/static/Inter-SemiBold.ttf";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Bold';
    src: url(${InterBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-SemiBold';
    src: url(${InterSemiBoldTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Light';
    src: url(${InterLightTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-ExtraLight';
    src: url(${InterExtraLightTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  body {
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    body {
      
    }
  }


  
`;

export default GlobalStyle;
