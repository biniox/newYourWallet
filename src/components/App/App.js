
import './App.scss';

//components
import Menu from './../../layout/menu/Menu';
import Header from '../../layout/header/Header';
import AddButton from '../AddButton/AddButton';

//pages
import Dashboard from './../../pages/Dashboard/Dashboard';
import Modal from '../modalComponents/Modal/Modal/Modal';
const App = () =>  (
    <div className="App" >

        <Menu/>
        
        <Header/> 
        
        <AddButton/>
        <div className="App__page">
          <Dashboard/>
        </div>
        <Modal/>  
    </div>
  );


export default App;
