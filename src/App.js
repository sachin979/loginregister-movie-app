import "./App.css";
import RoutesFunc from "./routes/Routes";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
  palette: {
    primary: {
      main: "#FFF",
      contrastText: "#000",
    },
    secondary: {
      main: "#F00",
    },
    text: {
      primary: "#0F0",
    },
    text: {
      secondary: "#00F",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RoutesFunc />
      </div>
    </ThemeProvider>
  );
}

export default App;
