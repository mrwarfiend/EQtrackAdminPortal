import React, { useRef } from "react";


function CreateTool(props){

    const [categs, updateCategs] = React.useState([]);

    const GetCategs=()=>{
        fetch('https://dotnet6webapi.azurewebsites.net/api/Categories', {
            method: 'GET',
            mode: 'cors'
        }).then(function(response){return response.json()})
        .then(function(myJson) {
            updateCategs(myJson);
        })
    }

    React.useEffect(()=>{GetCategs()}, []);


    const name = useRef('');
    const categId = useRef('');
    const desc = useRef('');
    const image = useRef('');

    async function CreateTool(){

        function check(s){
            if (s === ""){
                return "none";
            } else {
                return s
            }
        }

        await fetch('https://dotnet6webapi.azurewebsites.net/api/tools?' + new URLSearchParams({
            name: check(name.current.value),
            categId: categId.current.value,
            desc: check(desc.current.value),
            img: check(image.current.value)
        }), {
            method: 'POST',
            mode: 'cors'
        });
        props.onClick();
    }




    return (<div className="container-fluid">
    <div className="row">
        <h1 style={{color: 'black'}}>Tools</h1>
        <button onClick={props.onClick}>Go Back</button>
    </div>
    <div className="row bb shadow">

    </div>
    <div className="row">
        <form>
            <div className="row inventoryInfo">
                <input ref={name} type='text' placeholder="Name"></input>
            </div>
            <div className="row inventoryInfo">
                <select ref={categId}>
                    {categs.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>
            <div className="row inventoryInfo">
                <input ref={desc} type='text' placeholder="Description"></input>
            </div>
            <div className="row inventoryInfo">
                <input ref={image} type='text' placeholder="Image Url"></input>
            </div>
            <div className="row inventoryInfo">
                <button type="button" className="btn btn-success" onClick={CreateTool}>CREATE</button>
            </div>
        </form>
    </div>
</div>)
}

export default CreateTool;