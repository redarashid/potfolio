import ContactUs from "./components/4.contact/ContactUs";
import Header from "./components/1.header/Header";
import Hero from "./components/2.hero/Hero";
import Main from "./components/3.main/Main";
import Footer from "./components/5.footer/Footer";


function App() {
  return (
    <div className="container">
      <Header/>
      <div className="line"/>
      <Hero/>
      <div className="line"/>
      <Main/>
      <div className="line"/>
      <ContactUs/>
      <div className="line"/>
      <Footer/>
    </div>
  );
}

export default App;
