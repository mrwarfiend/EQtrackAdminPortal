import CurrentRenter from "../../Components/CurrentRenter";
import React from "react";

function CurrentRenters(){
    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/RentorInventories', {
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
            <h1 style={{color: 'black'}}>Current Renters</h1>
        </div>
        <div className="row bb shadow">

        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                    {tickets.map(item=><CurrentRenter key={item.id} tool={GetToolName(item.toolId)} time={item.timeStamp} user={item.userId}/>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}



export default CurrentRenters;