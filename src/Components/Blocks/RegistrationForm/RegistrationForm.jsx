import React from 'react';
import css from "../../../Styles/RegistrationForm.module.sass";
import Button from "../../Elements/Button";
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    return (
        <div className={css.formBlock}>
            <form className={css.form}>
                <label>
                    Enter your email
                </label>
                <br/>
                <input className={css.regInput} type="text" placeholder="someone@name.com"/>
                <br/><br/>
                <label>
                    Enter your password
                </label>
                <br/>
                <input className={css.regInput} type="password" placeholder="secret-words"/>
                <br/>
                <br/>
                <Link to="/profile">
                    <Button
                        text="Connect with digital identity"
                        float="left"
                    />
                </Link>
                <Link to="/">
                    <Button
                        text="Submit"
                        float="right"
                    />
                </Link>

            </form>
        </div>

    );
};

export default RegistrationForm;