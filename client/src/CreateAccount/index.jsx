import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
    //Initial state of empty form
    const emptyForm = {
        username: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, updateFormData] = useState(emptyForm);

    const handleUsernameChange = (e) => {

    }

    return (
        <form>
            <div class="container">
                <h1 id="heading1"><strong>UCSD Automated Dining</strong></h1>
                <h2 id="heading2"><b>Create An Account</b></h2>
                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Username" name="username" required></input>

                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Password" name="password" required></input>

                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="text" placeholder="Confirm Password" name="password" required></input>

                <button type="submit">Create Account</button>

                <Link to="/">Login</Link>
                
            </div>
            <div>
                
            </div>
        </form>
    )
}