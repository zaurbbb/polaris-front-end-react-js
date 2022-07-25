import React from 'react';
import css from "../../../Styles/Transfer.module.sass";
import DropdownList from "../DropdownList/select-box.jsx";
import Button from "../../Elements/Button";

const Transfer = () => {
    return (
        <section className={css.transferSection}>
            <article className={css.transferBlock}>
                <span style={{fontSize: "1.2rem", fontWeight: "900"}}>Transfer</span>
                <p>
                    From
                </p>
                <label htmlFor="">Blockchain</label>
                <div className={css.transferLine}>
                    <DropdownList
                        items={[
                            { value: "Polaris", id: 1, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Select a blockchain", id: 1, img: "" },
                            { value: "Bitcoin", id: 2, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Ethereum", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "Tether", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },
                        ]}
                    />
                    <input className={css.transferInput} type="text" placeholder="Sender address"/>
                </div>
                <p>
                    to
                </p>
                <label htmlFor="">Blockchain</label>
                <div className={css.transferLine}>

                    <DropdownList
                        items={[
                            { value: "Bitcoin", id: 1, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Select a blockchain", id: 1, img: "" },
                            { value: "Polaris", id: 2, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Tether", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "Ethereum", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },]}
                    />
                    <input className={css.transferInput} type="text" placeholder="Receiver address"/>
                </div>
                <p style={{textAlign: "left"}}>
                    In total
                </p>
                <div className={css.transferLine}>
                    <input className={css.transferRedInput} type="text" placeholder="500"/>
                    <DropdownList
                        items={[
                            { value: "Polaris", id: 1, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Bitcoin", id: 2, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Tether", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "Ethereum", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },]}
                    />
                    <i className="fa fa-long-arrow-right"></i>
                    <DropdownList
                        items={[
                            { value: "Bitcoin", id: 1, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png" },
                            { value: "Polaris", id: 2, img: "https://i.ibb.co/J2GgzLm/polaris-removebg.png" },
                            { value: "Tether", id: 3, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png" },
                            { value: "Ethereum", id: 4, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png" },
                            { value: "BNB", id: 5, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png" },
                            { value: "XRP", id: 6, img: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png" },]}
                    />
                    {/*<input className={css.transferGreenInput} type="text" placeholder="800"/>*/}

                </div>


                <br/>
                <Button
                    text="Connect a wallet"
                    float="left"
                />
                <Button
                    text="Transfer!"
                    float="right"
                />

            </article>
        </section>
    );
};

export default Transfer;