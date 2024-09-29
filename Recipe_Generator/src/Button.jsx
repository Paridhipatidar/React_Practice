import React from "react";

const Button = ({ callApi }) => {
    return (
        <button onClick={callApi}>
            Fetch Random Recipe
        </button>
    );
};

export default Button;
