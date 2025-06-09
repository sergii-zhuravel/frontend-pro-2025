import { orange } from "@mui/material/colors";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import { Container, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Form />
        <TodosList />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
