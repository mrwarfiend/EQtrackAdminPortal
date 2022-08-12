import DamagedInventory from "../../Components/DamagedInventory";
import React from "react";

function DamagedInventories(){
    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/ReturnTickets/GetDamagedReturns', {
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

    async function ReturnTool(id){
        await fetch('https://dotnet6webapi.azurewebsites.net/api/ReturnTickets/ReturnFixedTool?' + new URLSearchParams({id: id}), {
            method: 'POST',
            mode: 'cors'
        });
        getData();
    }

    return (<div className="container-fluid">
        <div className="row">
            <h1 style={{color: 'black'}}>Damaged Inventories</h1>
        </div>
        <div className="row bb shadow">

        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                    {tickets.map(item=><DamagedInventory key={item.id} time={item.timeStamp} tool={GetToolName(item.toolID)} user={item.userEmail} onClick={()=>ReturnTool(item.id)}/>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}



export default DamagedInventories;