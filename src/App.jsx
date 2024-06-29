import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from './components/Header'
import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";

const theme = createTheme({
  palette: {
    text: {
      primary: '#3b4144',
      secondary: '#007882',
      disabled: '#9e9e9e',
    },
    
    primary: {
      main: '#007882',
    },
    secondary: {
      main: '#fff',
    },
  },
  // Override or create new styles, colors, palettes...
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
