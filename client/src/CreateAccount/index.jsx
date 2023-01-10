import {React, useState} from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../API"

export const CreateAccount = () => {
    // jump between pages
    let nav = useNavigate();


    //Add notification for validation errors 
    const [errorText, setErrorText] = useState("");


    //Initial state of empty form
    const emptyForm = {
        username: "",
        password: "",
        confirmpassword: "",
    };

    const [formData, updateFormData] = useState(emptyForm);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim(),
        });
    }

    const handleCreateAccount = async(e) => {
        e.preventDefault();
        const req = e.target;


        const payload = formData;
        

        console.log(JSON.stringify(payload.user));
        console.log(req);
        console.log(e);

        let response = await API.createUser(payload);
        if (response.data.message === "empty") {
            //TODO: Conditionally render components based on the response from attempted user creation
            setErrorText("Cannot have empty fields!");
        } else if (response.data.message === "match")
            setErrorText("Passwords do not match!");
        else if (response.data.message === "exist") {
            setErrorText("Username in use; please try another!");
        } else {
            setErrorText("");
            nav("/");
            console.log("successful user creation");
        }
    }

    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Create An Account</b></h2>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" onChange={(handleChange)} required></input>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" id="password" onChange={(handleChange)} required></input>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" name="confirmpassword" id="confirmPassword" onChange={(handleChange)} required></input>
                <br></br>

                <button type="submit" onClick={handleCreateAccount}>Create Account</button>

                <br></br>
                <p id="err">{errorText}</p>
                <br></br>

                <Link id="loglink" to="/">Login</Link>   
            </div>
            <div>
                
            </div>
        </form>
    )
}