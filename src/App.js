import "./App.scss";
import Header from "./views/Header/Header";
import Hero from "./views/Hero/Hero";
import Acquaintance from "./views/Acquaintance/Acquaintance";
import Users from "./views/Users/Users";
import Form from "./views/Form/Form";
import MobileMenu from "./views/Mobile-menu/MobileMenu";

function App() {
  return (
    <>
      <MobileMenu />
      <Header />
      <Hero />
      <Acquaintance />
      <Users />
      <Form />
    </>
  );
}

export default App;
