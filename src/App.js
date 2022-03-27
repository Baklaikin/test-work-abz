import "./App.scss";
import Header from "./views/Header/Header";
import Hero from "./views/Hero/Hero";
import Acquaintance from "./views/Acquaintance/Acquaintance";
import Users from "./views/Users/Users";

function App() {
  return (
    <>
      {/* // <Container> */}
      <Header />
      <Hero />
      <Acquaintance />
      <Users />
      {/* // </Container> */}
    </>
  );
}

export default App;
