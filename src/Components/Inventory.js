import './CSS/Inventory.css';

function Inventory(props){
    return(<div className="col-md">
    <div className="inventory mx-auto d-block">
        <div className="row align-content-center inventoryHead">
            <img className="inventoryImg rounded mx-auto d-block" src={props.image} alt="Tool"></img>
        </div>
        <div className='container-fluid infoContainer'>
        <div className="row mt-3 inventoryInfo">
            <p><b>Inventory:</b> {props.inventory}</p>
        </div>
        <div className="row inventoryInfo">
            <p><b>Tool:</b> {props.tool}</p>
        </div>
        <div className="row inventoryInfo">
            <p><b>Count:</b> {props.count}</p>
        </div>
        <div className="row inventoryInfo">
            <p><b>Category:</b> {props.category}</p>
        </div>

        </div>
    </div></div>);
}

export default Inventory;