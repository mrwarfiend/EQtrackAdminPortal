import React from "react";
import Categ from "./Categ";
import CategEdit from "./CategEdit";

function CategCard(props) {
    const [card, setCard] = React.useState(<Categ id={props.id} name={props.name} desc={props.desc} edit={()=>switchEdit()} delete={props.delete} />);

    function switchEdit(){
        setCard(<CategEdit id={props.id} name={props.name} desc={props.desc} item={props.item} back={()=>switchCard()}/>);
    }
    function switchCard(){
        setCard(<Categ name={props.name} desc={props.desc} edit={()=>switchEdit()} delete={props.delete} />);
    }

    return(<div className="col-md">{card}</div>);
}


export default CategCard;