import "./App.scss";
import Header from "./views/Header/Header";
import Hero from "./views/Hero/Hero";
import Acquaintance from "./views/Acquaintance/Acquaintance";
import Users from "./views/Users/Users";
import Form from "./views/Form/Form";

function App() {
  return (
    <>
      {/* // <Container> */}
      <Header />
      <Hero />
      <Acquaintance />
      <Users />
      <Form />
    </>
  );
}

export default App;
