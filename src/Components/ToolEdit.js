import React, { useRef } from "react";


function ToolEdit(props){

    var name = useRef('');
    var categ = useRef('');
    var desc = useRef('');

    const [categs, updateCategs] = React.useState([]);

    const GetCateg=()=>{
        fetch('https://dotnet6webapi.azurewebsites.net/api/Categories', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
              }
        }).then(function(response){return response.json()})
        .then(function(myJson){updateCategs(myJson)})
    }

    React.useEffect(()=>{GetCateg()}, []);

    async function Edit(item){

        function check(s){
            if (s === ""){
                return "none";
            } else {
                return s
            }
        }


        await fetch('https://dotnet6webapi.azurewebsites.net/api/tools/Edit?'+ new URLSearchParams({
            id: props.id,
            name: check(name.current.value),
            categId: categ.current.value,
            desc: check(desc.current.value)
        }), {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
          }
    });
    await props.back();
    }



    return(<div className="col-md">
    <div className="inventory mx-auto d-block">
        <div className='container-fluid infoContainer'>
            <img className="inventoryImg rounded mx-auto d-block" src={props.image} alt="tool"></img>
            <form>
                <div className="row mt-3 inventoryInfo">
                    <p><b>Name:</b></p>
                </div>
                <div className="row">
                    <input ref={name} type='text' placeholder={props.name} ></input>
                </div>
                <div className="row inventoryInfo">
                    <p><b>Category:</b> </p>
                </div>
                <div className="row" defaultValue={0}>
                <select ref={categ}>
                    {categs.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                </div>
                <div className="row inventoryInfo">
                    <p><b>Description:</b></p>
                </div>
                <div className="row">
                <input ref={desc} type='text' placeholder={props.desc} ></input>
                </div>
            </form>
        </div>
        <div className="row inventoryInfo">
            <div className="col-2"></div>
            <button onClick={()=>Edit(props.item)} className="col-4 btn btn-warning btn-lg btn-block input-block-level">Save</button>
            <button onClick={props.back} className="col-4 btn btn-danger btn-lg btn-block input-block-level">Back</button>
            <div className="col-2"></div>
        </div>
    </div></div>);
}

export default ToolEdit;