import React from 'react';
import css from "../../Styles/Transfer.module.sass";
import Footer from "../Blocks/Footer/Footer";
import Header from "../Blocks/Header/Header";
import Profile from "../Blocks/Profile/Profile";

const ProfilePage = () => {
    return (
        <section className={css.profileSection}>
            <Header />
            <Profile />
            <Footer />
        </section>
    );
};

export default ProfilePage;