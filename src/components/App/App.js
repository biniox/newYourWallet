import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import React from 'react'
import {NotificationContainer} from 'react-notifications';

import './App.scss';
import 'react-notifications/lib/notifications.css';

//components
import Menu from './../../layout/menu/Menu';
import Header from '../../layout/header/Header';
import AddButton from '../AddButton/AddButton';

//pages
import Dashboard from './../../pages/Dashboard/Dashboard';
import Details from '../../pages/Details/Details';
import Management from '../../pages/Management/Management';

import Modal from '../modalComponents/Modal/Modal/Modal';
import GlobalProvider from '../../context/GlobalStore';
import Loader from '../loader/Loader';

const App = () =>  (
    <div className="App" >
      <GlobalProvider>
          <Router>
            <Menu/>
            <Header/> 
            <AddButton/>
                <Switch>
                <div className="App__page" >
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" exact component={Dashboard} />
                  <Route exact path="/details" exact component={Details} />
                  <Route exact path="/management" exact component={Management} />
                  </div>
                </Switch>
          </Router>
            <Modal/>  
            {/* <Loader/> */}
            <NotificationContainer/>
      </GlobalProvider>
        

    </div>
  );


export default App;
