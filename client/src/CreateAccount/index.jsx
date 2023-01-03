import {React, useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../API"

export const CreateAccount = () => {
    //TODO: Add modal popup


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

    //TODO: Move create account validation to here from user.js route
    const handleCreateAccount = async(e) => {
        e.preventDefault();
        const req = e.target;
        console.log(req.name);

        const payload = formData;
        

        console.log(JSON.stringify(payload.user));
        console.log(req);
        console.log(e);

        await API.createUser(payload);
        console.log("successful user creation");
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

                <Link to="/">Login</Link>   
            </div>
            <div>
                
            </div>
        </form>
    )
}