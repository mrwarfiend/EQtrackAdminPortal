

function ReturnTicket(props){
    return (<div className='row ticket'>
        <div className="col-4 bb">
            <p>{props.time}</p>
        </div>
        <div className="col-3 bb brl">
            <p>{props.tool}</p>
        </div>
        <div className="col-1 bb">
            <p>{props.condition}</p>
        </div>
        <div className="col-1 bb brl">
            <p>{props.repair}</p>
        </div>
        <div className="col-3 bb">
            <p>{props.user}</p>
        </div>
    </div>);
}

export default ReturnTicket;