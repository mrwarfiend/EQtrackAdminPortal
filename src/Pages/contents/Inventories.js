import Inventory from "../../Components/Inventory";
import React from "react";

function Inventories(props){
    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/Inventories', {
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
    function GetToolId(id){
        var t;
        tools.forEach(Element=>{
            if (Element.id === id){
                t = Element.categID;
            }
        });
        return t;
    }
    function GetToolImage(id){
        var t;
        tools.forEach(Element=>{
            if (Element.id === id){
                t = Element.image;
            }
        });
        return t;
    }


    const [categs, updateCategs] = React.useState([]);

    const getCategs=()=>{fetch('https://dotnet6webapi.azurewebsites.net/api/Categories', {
        method: 'GET',
        mode: 'cors'
    }).then(function(response){return response.json()})
    .then(function(myJson) {
        updateCategs(myJson);
    })};

    React.useEffect(()=>{getCategs()}, []);

    function GetCategName(id){
        var tId = GetToolId(id);
        var c;
        categs.forEach(Element=>{
            if (Element.id === tId){
                c = Element.name;
            }
        });
        return c;
    }

    return (<div className="container-fluid">
        <div className="row">
            <h1 style={{color: 'black'}}>Inventories</h1>
            <button onClick={props.onClick}>Create New</button>
        </div>
        <div className="row bb shadow">

        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                    {tickets.map(item=><Inventory key={item.id} image={"https://dotnet6app.azurewebsites.net/images/tools/"+GetToolImage(item.toolID)} tool={GetToolName(item.toolID)} count={item.count} inventory={item.name} category={GetCategName(item.id)}/>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}



export default Inventories;