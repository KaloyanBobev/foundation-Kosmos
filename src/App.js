
import { Route, Switch } from 'react-router-dom';

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
    </div>
  );
}

export default App;
