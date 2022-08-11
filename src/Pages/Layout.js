import { useLocation, useNavigate } from 'react-router-dom';
import react from 'react';
import './Layout.css';
import Tab from '../Components/Tab';
import Tickets from './contents/Tickets';


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
        screenUpdate(<h1 style={{color: 'black'}}>Returns</h1>);
    }
    function switchInventory(){
        ResetTabs();
        screenUpdate(<h1 style={{color: 'black'}}>Inventory</h1>);
    }
    function switchDamagedInventory(){
        ResetTabs();
        screenUpdate(<h1 style={{color: 'black'}}>Damaged Inventory</h1>);
    }
    function switchCurrentRenters(){
        ResetTabs();
        screenUpdate(<h1 style={{color: 'black'}}>Current Renters</h1>);
    }
    function switchTools(){
        ResetTabs();
        screenUpdate(<h1 style={{color: 'black'}}>Tools</h1>);
    }
    function switchCategories(){
        ResetTabs();
        screenUpdate(<h1 style={{color: 'black'}}>Categories</h1>);
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