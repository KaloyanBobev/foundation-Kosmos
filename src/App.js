
import { Route, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import './App.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './pages/Home';
import Books from './pages/Books';
import Poets from './pages/Poets';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/poets" component={Poets} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <CookieConsent
        location="top"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
}

export default App;
