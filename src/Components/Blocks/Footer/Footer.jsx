import React from 'react';
import css from "../../../Styles/Footer.module.sass";

const Footer = () => {
    return (
        <footer>
            <div>
                Polaris Project by 13labs

                © 2022
            </div>
            <div className={css.footerLinks}>
                <a href="https://t.me/lagmazavr">
                    <i className="fa fa-telegram"></i> Akzhan
                </a>
                /
                <a href="https://t.me/lagmazavr">
                    <i className="fa fa-telegram"></i> Arina
                </a>
                /
                <a href="https://t.me/lagmazavr">
                    <i className="fa fa-telegram"></i> Tairzhan
                </a>
                /
                <a href="https://t.me/lagmazavr">
                    <i className="fa fa-telegram"></i> Zaur
                </a>
            </div>
        </footer>
    );
};

export default Footer;