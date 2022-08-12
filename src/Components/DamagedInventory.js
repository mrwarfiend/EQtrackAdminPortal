

function DamagedInventory(props){
    return(<div className="col-md">
    <div className="inventory mx-auto d-block">
        <div className='container-fluid infoContainer'>
            <div className="row mt-3 inventoryInfo">
                <p><b>Time:</b> {props.time}</p>
            </div>
            <div className="row inventoryInfo">
                <p><b>Tool:</b> {props.tool}</p>
            </div>
            <div className="row inventoryInfo">
                <p><b>User:</b> {props.user}</p>
            </div>

        </div>
        <div className="row inventoryInfo">
            <div className="col-2"></div>
            <button onClick={props.onClick} className="col-8 btn btn-danger btn-lg btn-block input-block-level">Return as fixed</button>
            <div className="col-2"></div>
        </div>
    </div></div>);
}

export default DamagedInventory;