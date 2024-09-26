import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard.jsx';
import React, { useState } from 'react'
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useWindowDimensions from './Hooks/useWindowDimensions.jsx'

function App() {

// state untuk login
  const [isLoggedin, setLoggedin] = useState(false);
  const {height, width} = useWindowDimensions()


  document.title = 'Telyu Event'
  return(
    <div className='appcontainer'>
      <Router>
        <div className="content"> 
        {location.pathname !== '/login' && <Navbar/>}
        <Switch>
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
        </div>
        {location.pathname !== '/login' && <Footer/>}
      </Router>
    </div>
  )
}

export default App
