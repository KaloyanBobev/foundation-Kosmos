
import { Link, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import ForUs from './pages/ForUs';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="app">
      <Link to="/" > Начало </Link>
      <Link to="/for-us" > За нас </Link>
      <Link to="/contacts" > Контакти </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/for-us" component={ForUs} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
