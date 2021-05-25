import { Container } from "@material-ui/core";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";
import Routes from "./Routes";

function App() {
  let item = localStorage.getItem("theme");
  if (item === "light") item = true;
  else item = false;

  return (
    <Container
      maxWidth="xl"
      disableGutters
      style={{ backgroundColor: item ? "#EBEEF5" : "#0C162F" }}
    >
      <Navbar />
      <ThemeSwitch />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
