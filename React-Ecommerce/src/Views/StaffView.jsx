import React, { useState } from "react";
import { StaffLogIn } from "../Components/StaffLogIn";
import { StaffInventoryList } from "../Components/StaffInventoryList";

export function StaffView () {

    const adminUser = {
        email: "staff@admin.com",
        password: "staff"
    }

    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if ((details.email == adminUser.email ) && (details.password == adminUser.password)) {
            console.log("Logged in!");
            setUser({
                email: details.email

            });
        } else {
            console.log("Incorrect credentials. Please try again.");
            setError("Incorrect credentials. Please try again.");
        }
        
    }

    const Logout = () => {
        setUser({ email: "", password: ""});
    }

    return (
        <div className="successful-login">
            {(user.email != "") ? (
                <div className="welcome">
                    <h1>Welcome~</h1>
                    <StaffInventoryList />
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <StaffLogIn Login={Login} error={error} />
            )}
        </div>
    );

}



