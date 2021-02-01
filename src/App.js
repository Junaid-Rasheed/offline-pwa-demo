import React from 'react';
import './App.css';
import {Link , BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'

function App() {
  return (
    <Router>
      <Link to='/'><button>home</button></Link>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
