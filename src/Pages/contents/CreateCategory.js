import React, { useRef } from "react";


function CreateCategory(props){

    const name = useRef('');
    const desc = useRef('');

    async function Create(){

        function check(s){
            if (s === ""){
                return "none";
            } else {
                return s
            }
        }

        await fetch('https://dotnet6webapi.azurewebsites.net/api/Categories/Create?' + new URLSearchParams({
            name: check(name.current.value),
            desc: check(desc.current.value)
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
                <input ref={desc} type='text' placeholder="Description"></input>
            </div>

            <div className="row inventoryInfo">
                <button type="button" className="btn btn-success" onClick={Create}>CREATE</button>
            </div>
        </form>
    </div>
</div>)
}

export default CreateCategory;