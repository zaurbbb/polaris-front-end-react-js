import React from 'react';
import css from "../../../Styles/Swap.module.sass";
import DropdownList from "../DropdownList/select-box.jsx";
import Button from "../../Elements/Button";

const History = () => {
    return (
        <section className={css.swapSection}>
            <article className={css.swapBlock}>
                <span style={{fontSize: "1.2rem", fontWeight: "900"}}>History tokens</span>
                <br/><br/>
                <div className={css.swapLine}>
                    <input className={css.swapInput} type="text" placeholder="0.00"/>

                    <DropdownList
                        items={[
                            { value: "Polaris", id: 1, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Bitcoin", id: 2, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Ethereum", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "Tether", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },
                        ]}
                    />
                </div>
                <p style={{textAlign: "center"}}>
                    to
                </p>
                <div className={css.swapLine}>
                    <input className={css.swapInput} type="text" placeholder="0.00"/>

                    <DropdownList
                        items={[
                            { value: "Bitcoin", id: 1, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Polaris", id: 2, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Tether", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "Ethereum", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },]}
                    />
                </div>
                <br/>
                <Button
                    text="History!"
                    float="right"
                />

            </article>
        </section>
    );
};

export default Swap;