import React, { useRef } from "react";


function CategEdit(props){

    var name = useRef('');
    var desc = useRef('');

    async function Edit(item){

        function check(s){
            if (s === ""){
                return "none";
            } else {
                return s
            }
        }


        await fetch('https://dotnet6webapi.azurewebsites.net/api/Categories/Edit?'+ new URLSearchParams({
            id: props.id,
            name: check(name.current.value),
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
            <form>
                <div className="row mt-3 inventoryInfo">
                    <p><b>Name:</b></p>
                </div>
                <div className="row">
                    <input ref={name} type='text' placeholder={props.name} ></input>
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

export default CategEdit;