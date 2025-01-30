import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import AppRouter from "./routes/Router";
import theme from "./styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
