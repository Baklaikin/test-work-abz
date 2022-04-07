import "./App.scss";
import Header from "./views/Header/Header";
import Hero from "./views/Hero/Hero";
import Acquaintance from "./views/Acquaintance/Acquaintance";
import Users from "./views/Users/Users";
import Form from "./views/Form/Form";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Acquaintance />
      <Users />
      <Form />
      <Footer />
      <div className="mobile__bottom"></div>
    </>
  );
}

export default App;
