import React from 'react';
import "../../Styles/Button.module.sass";

const Button = (props) => {
    let float = props.float
    return (
        <button
            style={{float: `${float}`}}
        >
            {props.text}
        </button>
    );
};

export default Button;