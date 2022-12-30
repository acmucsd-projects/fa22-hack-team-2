import React from "react";
import "./style.css";
import { Link, BrowserRouter } from 'react-router-dom';

export const Login = () => {
    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Login</b></h2>
                <label for="username">Username</label>
                <input type="text" placeholder="Username" name="username" required></input>

                <label for="password">Password</label>
                <input type="text" placeholder="Password" name="password" required></input>

                <button type="submit">Login</button>


                <Link to="/create-account">Register Account</Link>
                
                
            </div>
            <div>
                
            </div>
        </form>
    )
}