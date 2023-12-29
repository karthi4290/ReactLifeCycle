import React from "react";
import HocAuth from "./Hoc";

const ProtectedComponent = ({ handleLogout }) => {

    return (
        <>
            <h1>I am protected component</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export const ProtectedAuthComponent = HocAuth(ProtectedComponent)


