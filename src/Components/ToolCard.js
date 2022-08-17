import React from "react";
import Tool from "./Tool";
import ToolEdit from "./ToolEdit";

function ToolCard(props) {
    const [card, setCard] = React.useState(<Tool id={props.id} name={props.name} image={props.image} category={props.category} desc={props.desc} edit={()=>switchEdit()} delete={props.delete} />);

    function switchEdit(){
        setCard(<ToolEdit id={props.id} image={props.image} name={props.name} category={props.category} desc={props.desc} item={props.item} back={()=>switchCard()}/>);
    }
    function switchCard(){
        setCard(<Tool name={props.name} image={props.image} category={props.category} desc={props.desc} edit={()=>switchEdit()} delete={props.delete} />);
    }

    return(<div className="col-md">{card}</div>);
}


export default ToolCard;