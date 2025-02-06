import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom"; // Router importi
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppRouter />
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
