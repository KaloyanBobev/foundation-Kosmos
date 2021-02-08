
import { Route, Switch } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
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
import CookiePolicy from './pages/cookiePolicy.js';
import { Link } from 'react-router-dom';

function App() {
  Cookies.set("test", "nice");
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
        <Route path="/cookie" component={CookiePolicy} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <CookieConsent
        // onAccept={() => {
        // }}
        debug={true}
      >
        Този сайт използва „бисквитки“, за да ви предостави по-добри услуги.
        <Link className="link" to="/cookie">Cookie Policy</Link>
      </CookieConsent>
    </div>
  );
}

export default App;
