import react from 'react';
import { Link, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Route to="/" component={Home}></Route>
    </div>
  );
}

export default App;
