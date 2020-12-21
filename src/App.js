import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
