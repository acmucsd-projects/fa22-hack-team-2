import {React, useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../API"

export const CreateAccount = () => {
    //Initial state of empty form
    const emptyForm = {
        username: "",
        password: "",
        confirmPassword: ""
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
        console.log(req.name);

        const payload = {
            user: formData
        }

        console.log(JSON.stringify(payload.user));
        console.log(req);
        console.log(e);

        await API.createUser(payload);
        alert("successful user creation");
    }

    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Create An Account</b></h2>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" onChange={(handleChange)} required></input>

                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Password" name="password" onChange={(handleChange)} required></input>

                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="text" placeholder="Confirm Password" name="password" onChange={(handleChange)} required></input>

                <button type="submit" onClick={handleCreateAccount}>Create Account</button>

                <Link to="/">Login</Link>
                
            </div>
            <div>
                
            </div>
        </form>
    )
}