import { Container } from "@material-ui/core";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
