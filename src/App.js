import "./App.css";
import RoutesFunc from "./routes/Routes";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"].join(","),
  },
  palette: {
    primary: {
      main: "#0C1821",
      contrastText: "#CCC9DC",
    },
    secondary: {
      main: "#324A5F",
    },
    text: {
      primary: "#0C1821",
    },
    text: {
      secondary: "#273A50",
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
