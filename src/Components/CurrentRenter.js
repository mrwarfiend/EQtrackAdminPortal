

function CurrentRenter(props){
    return(<div className="col-md">
    <div className="inventory mx-auto d-block">
        <div className='container-fluid infoContainer'>
            <div className="row inventoryInfo">
                <p><b>User:</b> {props.user}</p>
            </div>
            <div className="row inventoryInfo">
                <p><b>Tool:</b> {props.tool}</p>
            </div>
            <div className="row mt-3 inventoryInfo">
                <p><b>Holding Since:</b> {props.time}</p>
            </div>

        </div>
    </div></div>);
}

export default CurrentRenter;