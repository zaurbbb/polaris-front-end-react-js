import React from 'react';
import css from "../../../Styles/History.module.sass";
import HistoryItem from "./HistoryItem/HistoryItem";

const data = [
    {
        "time": "25.07.2022 18:50",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Bitcoin",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        "amount": "51.564679",
        "destination": "1dXe...83g",
        "txid": "36da...er5",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 16:20",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "BNB",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png",
        "amount": "2.0515189",
        "destination": "sfe8...as5",
        "txid": "5s8f...8ef",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 16:02",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Bitcoin",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        "amount": "28.52498",
        "destination": "sefe...852",
        "txid": "36da...er5",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 13:30",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Tether",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png",
        "amount": "2.0515189",
        "destination": "1dXe...83g",
        "txid": "qe32...e15",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 13:10",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Polaris",
        "ico": "https://i.ibb.co/J2GgzLm/polaris-removebg.png",
        "amount": "48.094593",
        "destination": "plpr...849",
        "txid": "5r4r...2r4",
        "status": "Completed",
    },
    {
        "time": "24.07.2022 04:04",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "XRP",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png",
        "amount": "8.5393276",
        "destination": "we9r...6ew",
        "txid": "68ea...re5",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 08:50",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Polaris",
        "ico": "https://i.ibb.co/J2GgzLm/polaris-removebg.png",
        "amount": "3.2819668",
        "destination": "r5e...3g8",
        "txid": "re58...tr5",
        "status": "Completed",
    },

    {
        "time": "25.07.2022 16:44",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "XRP",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png",
        "amount": "6.4249580",
        "destination": "wer5...8v5",
        "txid": "we9f...7qe",
        "status": "Completed",
    },
    {
        "time": "25.07.2022 18:50",
        "type": "Transfer",
        "wallet": "Polaris Wallet",
        "asset": "Bitcoin",
        "ico": "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        "amount": "7.6846874",
        "destination": "ky8...8qw",
        "txid": "133r...re1",
        "status": "Completed",
    },

]


const History = () => {
    return (
        <section className={css.historySection}>
            <article>
                <div>Time</div>
                <div>Type</div>
                <div>Wallet</div>
                <div>Asset</div>
                <div>Amount</div>
                <div>Dest.</div>
                <div>TxID</div>
                <div>Status</div>
            </article>
            {data.map((item) => (
                <HistoryItem
                    time={item.time}
                    type={item.type}
                    wallet={item.wallet}
                    asset={item.asset}
                    ico={item.ico}
                    amount={item.amount}
                    destination={item.destination}
                    txid={item.txid}
                    status={item.status}
                />
            ))}
        </section>
    );
};

export default History;