import ToolCard from "../../Components/ToolCard";
import React from "react";

function Tools(props){
    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/tools', {
        method: 'GET',
        mode: 'cors'
    }).then(function(response){return response.json()})
    .then(function(myJson) {
        updateTickets(myJson)
      })};

    React.useEffect(()=>{ getData()}, []);


    // Gets the tool name to display in the tickets content
    const [tools, updateTools] = React.useState([]);

    const getTools=()=>{fetch('https://dotnet6webapi.azurewebsites.net/api/Categories', {
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

    async function Delete(id) {
        await fetch('https://dotnet6webapi.azurewebsites.net/api/tools?' + new URLSearchParams({id: id}), {
            method: 'DELETE',
            mode: 'cors'
        });
        getData();
    }

    return (<div className="container-fluid">
        <div className="row">
            <h1 style={{color: 'black'}}>Tools</h1>
            <button onClick={props.onClick}>Create New</button>
        </div>
        <div className="row bb shadow">

        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                    {tickets.map(item=><ToolCard key={item.id} update={updateTools} id={item.id} name={item.name} image={"https://dotnet6app.azurewebsites.net/images/tools/"+item.image} category={GetToolName(item.categID)} desc={item.desc} delete={()=>Delete(item.id)} item={item}/>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}



export default Tools;