import React from 'react';
import css from "../../Styles/TradePage.module.sass";
import Header from "../Blocks/Header/Header";
import Footer from "../Blocks/Footer/Footer";
import Swap from "../Blocks/Swap/Swap";

const Trade = () => {
    return (
        <div className="tradeWrapper">
            <Header />
            <Swap />
            <Footer />
        </div>
    );
};

export default Trade;