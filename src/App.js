import { Container } from "@material-ui/core";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar />
      <Routes />
    </Container>
  );
}

export default App;
