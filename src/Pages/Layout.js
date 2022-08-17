import { useLocation, useNavigate } from 'react-router-dom';
import react from 'react';
import './Layout.css';
import Tab from '../Components/Tab';
import Tickets from './contents/Tickets';
import ReturnTickets from './contents/ReturnTickets';
import Inventories from './contents/Inventories';
import DamagedInventories from './contents/DamagedInventories';
import CurrentRenters from './contents/CurrentRenters';
import Tools from './contents/Tools';
import Categories from './contents/Categories';
import CreateTool from './contents/CreateTool';
import CreateCategory from './contents/CreateCategory';
import CreateInventory from './contents/CreateInventory';


function Layout(){

    const navigate = useNavigate();
    const {state} = useLocation();
    var User = state;


    function Logout(){
        navigate('/');
    }


    function ResetTabs(){
        Array.from(document.getElementsByClassName('tab')).forEach(element=>{
            element.style.width = '100%';
        });
    }


    const [screen, screenUpdate] = react.useState(<Tickets />);

    function switchTickets(element){
        ResetTabs();

        screenUpdate(<Tickets />);
    }
    function switchReturnTickets(){
        ResetTabs();
        screenUpdate(<ReturnTickets />);
    }
    function switchInventory(){
        ResetTabs();
        screenUpdate(<Inventories onClick={switchCreateInventory}/>);
    }
    function switchCreateInventory(){
        screenUpdate(<CreateInventory onClick={switchInventory}/>)
    }
    function switchDamagedInventory(){
        ResetTabs();
        screenUpdate(<DamagedInventories />);
    }
    function switchCurrentRenters(){
        ResetTabs();
        screenUpdate(<CurrentRenters />);
    }
    function switchTools(){
        ResetTabs();
        screenUpdate(<Tools onClick={switchCreateTool}/>);
    }
    function switchCreateTool(){
        screenUpdate(<CreateTool onClick={switchTools}/>)
    }
    function switchCategories(){
        ResetTabs();
        screenUpdate(<Categories onClick={switchCreateCategory}/>);
    }
    function switchCreateCategory(){
        screenUpdate(<CreateCategory onClick={switchCategories}/>);
    }

    return (<div>
        <div className="headerBack">
            <div className='row'>
                <div className='col-4'>
                    <h5 style={{color: 'white', paddingLeft: '5%'}}>{User.user}</h5>
                </div>
                <div className='col-4'>
                    <h1 className='headerTitle'>EQtrack Portal</h1>
                </div>
                <div className='col-4 text-center'>
                    <button onClick={Logout} className='btn btn-danger headerBtn'>Logout</button>
                </div>
            </div>
        </div>
        <div className='sidebar'>
            <Tab title="Tickets" id="tickets" onClick={switchTickets}/>
            <Tab title="Return Tickets" id="returnTickets" onClick={switchReturnTickets}/>
            <Tab title="Inventory" id="Inventory" onClick={switchInventory}/>
            <Tab title="Damaged Inventory" id="damagedInventory" onClick={switchDamagedInventory}/>
            <Tab title="Current Renters" id="currentRenters" onClick={switchCurrentRenters}/>
            <Tab title="Tools" id="tools" onClick={switchTools} />
            <Tab title="Categories" id="categories" onClick={switchCategories}/>

        </div>

        <div className='content'>
            {screen}
        </div>

        <footer className='portalFooter'>

        </footer>
    </div>);
}

export default Layout;