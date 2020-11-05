import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.scss';

//components
import Menu from './../../layout/menu/Menu';
import Header from '../../layout/header/Header';
import AddButton from '../AddButton/AddButton';

//pages
import Dashboard from './../../pages/Dashboard/Dashboard';
import Details from '../../pages/Details/Details';

import Modal from '../modalComponents/Modal/Modal/Modal';
const App = () =>  (
    <div className="App" >
        <Router>
          <Menu/>
          <Header/> 
          <AddButton/>


              <Switch>
              <div className="App__page">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" exact component={Dashboard} />
                <Route exact path="/details" exact component={Details} />
                </div>
              </Switch>

        </Router>


          {/* <Modal/>   */}
    </div>
  );


export default App;
