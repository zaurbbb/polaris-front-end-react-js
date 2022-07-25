import React from 'react';
import "../../Styles/MainPage.module.sass";
import Header from "../Blocks/Header/Header";
import Slogan from "../Blocks/Slogan/Slogan";
import Footer from "../Blocks/Footer/Footer";
import RegistrationForm from "../Blocks/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    return (
        <div className="registrationWrapper">
            <Header />
            <RegistrationForm />
            <Footer />
        </div>
    );
};

export default RegistrationPage;