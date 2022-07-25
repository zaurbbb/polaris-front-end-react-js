import React from 'react';
import css from "../../Styles/TradePage.module.sass";
import Header from "../Blocks/Header/Header";
import Footer from "../Blocks/Footer/Footer";
import Swap from "../Blocks/Swap/Swap";
import Transfer from "../Blocks/Transfer/Transfer";

const Trade = () => {
    return (
        <div className="transferWrapper">
            <Header />
            <Transfer />
            <Footer />
        </div>
    );
};

export default Trade;