import './CSS/Ticket.css';

function Ticket(props){
    return (<div className="row ticket">
        <div className="col-4 bb">
            <p>{props.time}</p>
        </div>
        <div className="col-4 brl bb">
            <p>{props.tool}</p>
        </div>
        <div className="col-4 bb">
        <p>{props.user}</p>
        </div>
    </div>);
}

export default Ticket;