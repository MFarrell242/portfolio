import React from 'react';
import './App.css';
import About from './pages/About';
import List from './pages/List';
import Contact from './pages/List';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/Portfolio" component={List}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route path="*" component={About}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
