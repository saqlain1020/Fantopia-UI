import { Container } from "@material-ui/core";
import { useEagerConnect } from "@react-dapp/wallet";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes";
import { useFetchNotifications, useLoadUser } from "./State/hooks";

function App() {
  let item = localStorage.getItem("theme");
  if (item === "light") item = true;
  else item = false;
  useEagerConnect();
  useLoadUser();
  // useFetchNotifications();
  return (
    <Container
      maxWidth="xl"
      disableGutters
      style={{ backgroundColor: item ? "#EBEEF5" : "#0C162F" }}
    >
      <Navbar />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
