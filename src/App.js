import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Experiencies from './pages/experiencies';
import Navbar from './components/Navbar/index';
import Sidebar from './components/Sidebar/index';

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const toggle = ()=> {
      setIsOpen(!isOpen);
  }
  return (
    <Router>
      <Sidebar isOpen={isOpen}  toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/experiencies' component={Experiencies} exact />
      </Switch>      
    </Router>
  );
}

export default App;
