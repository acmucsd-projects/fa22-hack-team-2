import React from "react";
import "./style.css";

export const Login = () => {
    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Login</b></h2>
                <label for="email">Email</label>
                <input type="text" placeholder="Email" name="email" required></input>

                <label for="password">Password</label>
                <input type="text" placeholder="Password" name="password" required></input>

                <button type="submit">Login</button>
            </div>
            <div>
                
            </div>
        </form>
    )
}