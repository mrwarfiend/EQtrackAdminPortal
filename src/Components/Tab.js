import './Tab.css';


function Tab(props){
    return(<button className='btn btn-warning Tab' id={props.id} onClick={props.onClick}>{props.title}</button>);
}

export default Tab;