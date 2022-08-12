import React from "react";
import ReturnTicket from "../../Components/ReturnTicket";

function ReturnTickets(){

    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/ReturnTickets', {
        method: 'GET',
        mode: 'cors'
    }).then(function(response){return response.json()})
    .then(function(myJson) {
        updateTickets(myJson)
      })};

    React.useEffect(()=>{ getData()}, []);


    // Gets the tool name to display in the tickets content
    const [tools, updateTools] = React.useState([]);

    const getTools=()=>{fetch('https://dotnet6webapi.azurewebsites.net/api/tools', {
        method: 'GET',
        mode: 'cors'
    }).then(function(response){return response.json()})
    .then(function(myJson) {
        updateTools(myJson);
    })};

    React.useEffect(()=>{getTools()}, []);

    function GetToolName(id){
        var t;
        tools.forEach(Element=>{
            if (Element.id === id){
                t = Element.name;
            }
        });
        return t;
    }

    return (<div className="container-fluid">
        <div className="row">
            <h1 style={{color: 'black'}}>Return Tickets</h1>
        </div>
        <div className="row bb">
            <div className="col-4">
                <p className="colTitle">Time</p>
            </div>
            <div className="col-3">
                <p className="colTitle">Tool</p>
            </div>
            <div className="col-1">
                <p className="colTitle left">Condition</p>
            </div>
            <div className="col-1">
                <p className="colTitle left">Repair Needed</p>
            </div>
            <div className="col-3">
                <p className="colTitle">User</p>
            </div>
        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                {tickets.map(item=><ReturnTicket key={item.id} time={item.timeStamp} tool={GetToolName(item.toolID)} condition={item.condition} repair={item.repairNeeded.toString()} user={item.userEmail}/>)}
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}

export default ReturnTickets;