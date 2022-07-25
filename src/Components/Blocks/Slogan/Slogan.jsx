import React from 'react';
import css from "../../../Styles/Slogan.module.sass";
import Button from "../../Elements/Button";
import {Link} from "react-router-dom";

const Slogan = () => {
    return (
        <main>
            <h1>
                Exchange tokens & earn up with Polaris.
            </h1>
            <h3>
                Be part of the crypto universe with us!
            </h3>
            <br/>
            <div className={css.sloganBtnsGroup}>
                <Link to="/trade">
                    <Button
                        text="Trade"
                        float=""
                    />
                </Link> or
                <Link to="/transfer">
                    <Button
                        text="Transfer"
                        float=""
                    />
                </Link>
            </div>

        </main>
    );
};

export default Slogan;