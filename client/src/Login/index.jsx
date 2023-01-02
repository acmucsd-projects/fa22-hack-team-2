import {React, useState, useEffect} from "react";
import "./style.css";
import { Link, BrowserRouter } from 'react-router-dom';
import API from "../API"

export const Login = () => {
    //Initial state of empty form
    const emptyForm = {
        username: "",
        password: "",
    };



    const [formData, updateFormData] = useState(emptyForm);

    //list state to hold users to search from
    const [userData, updateUserData] = useState([]);

    const handleForm = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim(),
        });
    }

    //TODO: how to get userData updated without page reloading?
    const handleLogin = async(e) => {
        e.preventDefault();
        //iterate through all users
        for (let idx in userData) {
            //if there is matching username, check for matching password
            let user = userData[idx];
            if (formData.username === user.username && 
                formData.password === user.password) {
                    console.log("user match!");
            }else{
                console.log("User does not exist yet!");
            }
        }
    }

    //TODO: Get response data user array into allUsers + Fix infinite get calls
    useEffect(() => {
        API.getUser().then((response) => {
            console.log(response.data.users);
            updateUserData(response.data.users);
        })
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Login</b></h2>
                <label for="username">Username</label>
                <input type="text" placeholder="Username" name="username" onChange={handleForm} required></input>

                <label for="password">Password</label>
                <input type="text" placeholder="Password" name="password" onChange={handleForm} required></input>

                <button type="submit" onClick={handleLogin}>Login</button>


                <Link to="/create-account">Register Account</Link>
                
                
            </div>
            <div>
                
            </div>
        </form>
    )
}