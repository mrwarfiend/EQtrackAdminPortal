function Categ(props){
    return(<div className="col-md">
    <div className="inventory mx-auto d-block">
        <div className='container-fluid infoContainer'>
            <div className="row mt-3 inventoryInfo">
                <p><b>Name:</b> {props.name}</p>
            </div>
            <div className="row inventoryInfo">
                <p><b>Description:</b> {props.desc}</p>
            </div>

        </div>
        <div className="row inventoryInfo">
            <div className="col-2"></div>
            <button onClick={props.edit} className="col-4 btn btn-warning btn-lg btn-block input-block-level"><i class="bi bi-gear-fill"></i></button>
            <button onClick={props.delete} className="col-4 btn btn-danger btn-lg btn-block input-block-level"><i class="bi bi-trash-fill"></i></button>
            <div className="col-2"></div>
        </div>
    </div></div>);
}

export default Categ;