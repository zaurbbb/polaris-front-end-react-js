import React from 'react';
import "../../Styles/MainPage.module.sass";
import Header from "../Blocks/Header/Header";
import Slogan from "../Blocks/Slogan/Slogan";
import Footer from "../Blocks/Footer/Footer";

const MainPage = () => {
    return (
        <div className="mainWrapper">
            <Header />
            <Slogan />
            <Footer />
        </div>
    );
};

export default MainPage;