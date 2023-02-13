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

        if ((details.email == adminUser.email ) && (details.password == adminUser.password)) {
            setUser({
                email: details.email

            });
        } else {
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



