import React from 'react';
import "../../Styles/MainPage.module.sass";
import Header from "../Blocks/Header/Header";
import Slogan from "../Blocks/Slogan/Slogan";
import Footer from "../Blocks/Footer/Footer";
import History from "../Blocks/History/History";

const HistoryPage = () => {
    return (
        <div className="mainWrapper">
            <Header />
            <History />
            <Footer />
        </div>
    );
};

export default HistoryPage;