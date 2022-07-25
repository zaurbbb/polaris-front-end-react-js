import React from 'react';
import css from "../../../Styles/Header.module.sass";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="https://i.ibb.co/0ccKCg8/logo-removebg-preview.png" alt="logo"/>
                </Link>

            </div>
            <div>
                <NavLink to="/trade" className={navData => navData.isActive ? css.active : css.inActive}>Trade </NavLink>
                <NavLink to="/transfer" className={navData => navData.isActive ? css.active : css.inActive}>Transfer</NavLink>
                <NavLink to="/history" className={navData => navData.isActive ? css.active : css.inActive}>History</NavLink>
            </div>

                <div  className={css.headerLinks} >
                    <div>
                        <Link to="/registration">
                            <img src="https://i.ibb.co/J2GgzLm/polaris-removebg.png" alt=""/>
                        </Link>
                    </div>
                    <div style={{fontSize: "12px"}}>
                        0:713c...5d5 <br/>
                        15.6464984
                    </div>
                </div>

        </header>
    );
};

export default Header;