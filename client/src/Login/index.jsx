import {React, useState, useEffect} from "react";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom';
import API from "../API"

export const Login = () => {
    //Add notification for validation errors 
    const [errorText, setErrorText] = useState("");

    let nav = useNavigate();

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

    const handleLogin = async(e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            //cannot have empty fields
            setErrorText("Cannot have empty fields!");
        } else {
            //iterate through all users
            for (let idx in userData) {
                //if there is matching username, check for matching password
                let user = userData[idx];
                if (formData.username === user.username && 
                    formData.password === user.password) {
                        console.log("user match!");
                        //re-direct to preference page
                        nav("/preferences", {state:{username: user.username}});
                        setErrorText("");
                } else {
                    // no user match found
                    setErrorText("Username and/or password not recognized!");
                }
            }
        }
    }

    useEffect(() => {
        API.getUser().then((response) => {
            updateUserData(response.data.users);
        })
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return (
        <>
            <form>
                <div class="container">
                    <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                    <h2 id="heading2"><b>Login</b></h2>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Username" name="username" onChange={handleForm} required></input>

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={handleForm} required></input>

                    <button type="submit" onClick={handleLogin}>Login</button>

                    <br></br>
                    <p id="err">{errorText}</p>
                    <br></br>

                    <Link id="reglink" to="/create-account">Register Account</Link>
                    
                </div>
                <div>
                    
                </div>
            </form>
        </>
    )
}