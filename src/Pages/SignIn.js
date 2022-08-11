import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';


function SignIn(){

    const navigate = useNavigate();


    var usernameIn = useRef("");
    var passIn = useRef("");

    async function TrySignIn(){
    var wrongs = Array.from(document.getElementsByClassName("wrong"));
    wrongs.forEach(Element=>{
        Element.style.display= "none";
    });

    if (usernameIn.current.value !== "" && passIn.current.value !== ""){
        var response = await fetch('https://dotnet6webapi.azurewebsites.net/api/user/getpasswordcheck?'+ new URLSearchParams({
            username: usernameIn.current.value,
            pass: passIn.current.value
        }), {
            method: 'GET',
            mode: 'cors'
        }).then(response=>response.text());

        switch(response){
            case '101':
            document.getElementById("UserNF").style.display = 'block';
            break;
            case '102':
            document.getElementById("IncorrectPass").style.display = 'block';
            break;
            case '103':
                document.getElementById("UserNA").style.display = 'block';
            break;
            case '200':
                navigate('/portal', {state: {user: usernameIn.current.value, pass: passIn.current.value}});
            break;
            default:

            break;
        }

    } else {
        document.getElementById("Required").style.display = "block";
    }
    }


    return (<div className='SignInBackdrop'>
        <h1 className='title'>EQtrack Admin Portal</h1>
        <h1>Sign In</h1>
        <form >
            <div className='row justify-content-center'>
                <div className='col-md-3 center-block'>
                <input ref={usernameIn} className='form-control' type="text" placeholder='Username' required></input>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-3 center-block'>
                <input ref={passIn} className='form-control' type="password" placeholder='Password' required></input>
                </div>
            </div>
            <div className='row justify-content-center'>
                <button onClick={TrySignIn} className='purpleBtn col-md-2 btn btn-lg btn-block input-block-level' type='button'>Login</button> 
            </div>
            
        </form>
        <h3 className='wrong' id='UserNF'>User not Found</h3>
        <h3 className='wrong' id='IncorrectPass'>Incorrect Password</h3>
        <h3 className='wrong' id='UserNA'>User not Authorized</h3>
        <h3 className='wrong' id='Required'>Please fill in Required Fields</h3>
    </div>);
}

export default SignIn;