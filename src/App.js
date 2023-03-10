import About from "./components/About/About";
import AboutBg from "./components/Background/AboutBg";
import HeaderBg from "./components/Background/HeaderBg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <HeaderBg />
      <AboutBg />
      <div className="wrapper">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
