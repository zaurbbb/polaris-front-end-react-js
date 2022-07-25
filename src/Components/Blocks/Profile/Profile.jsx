import React from 'react';
import css from "../../../Styles/Transfer.module.sass";
import DropdownList from "../DropdownList/select-box";
import Button from "../../Elements/Button";

const Profile = () => {
    return (
        <section className={css.transferSection}>
            <article className={css.transferBlock}>
                <span style={{fontSize: "1.2rem", fontWeight: "900"}}>
                    Welcome, zaurberdibekov@mail.ru!
                </span>
            </article>
        </section>
    );
};

export default Profile;