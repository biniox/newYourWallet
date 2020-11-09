import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.scss';

//components
import Menu from './../../layout/menu/Menu';
import Header from '../../layout/header/Header';
import AddButton from '../AddButton/AddButton';

//pages
import Dashboard from './../../pages/Dashboard/Dashboard';
import Details from '../../pages/Details/Details';
import Management from '../../pages/Management/Management';

import Modal from '../modalComponents/Modal/Modal/Modal';
import ModalProvider from '../../context/modalStore';

const App = () =>  (
    <div className="App" >
      <ModalProvider>
          <Router>
            <Menu/>
            <Header/> 
            <AddButton/>


                <Switch>
                <div className="App__page">
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/dashboard" exact component={Dashboard} />
                  <Route exact path="/details" exact component={Details} />
                  <Route exact path="/management" exact component={Management} />
                  </div>
                </Switch>

          </Router>


            <Modal/>  
      </ModalProvider>
        

    </div>
  );


export default App;
