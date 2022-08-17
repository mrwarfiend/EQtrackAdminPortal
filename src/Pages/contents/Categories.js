import CategCard from "../../Components/CategCard";
import React from "react";

function Categories(props){
    const [tickets, updateTickets] = React.useState([]);

    // Gets the Tickets from the database to map into the react page 
    const getData=()=> {fetch('https://dotnet6webapi.azurewebsites.net/api/Categories', {
        method: 'GET',
        mode: 'cors'
    }).then(function(response){return response.json()})
    .then(function(myJson) {
        updateTickets(myJson)
      })};

    React.useEffect(()=>{ getData()}, []);


    async function Delete(id) {
        await fetch('https://dotnet6webapi.azurewebsites.net/api/tools?' + new URLSearchParams({id: id}), {
            method: 'DELETE',
            mode: 'cors'
        });
        getData();
    }


    return (<div className="container-fluid">
        <div className="row">
            <h1 style={{color: 'black'}}>Categories</h1>
            <button onClick={props.onClick}>Create New</button>
        </div>
        <div className="row bb shadow">

        </div>
        <div className="row ticketsScroll">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="row">
                    {tickets.map(item=><CategCard key={item.id} id={item.id} name={item.name} desc={item.desc} delete={()=>Delete(item.id)} item={item}/>)}
                </div>
            </div>
            <div className="col-1"></div>
        </div>
    </div>);
}



export default Categories;