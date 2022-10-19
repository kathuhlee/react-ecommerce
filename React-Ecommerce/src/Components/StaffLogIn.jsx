import React, { useState } from 'react';

export function StaffLogIn ({ Login, error }) {
    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="adminLogin">
                <h1>Admin Login</h1>
                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                    <form action="process.php" />
                    <div className="adminEmail">
                        <label htmlFor="email">User Email</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                    </div>
                    <div className="adminPassword">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                    </div>
                <button type="submit" className="adminSubmit">Submit</button>
            </div>
        </form>
    );

}