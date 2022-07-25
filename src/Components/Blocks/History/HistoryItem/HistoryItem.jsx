import React from 'react';

const HistoryItem = (props) => {
    return (
        <div>
            <article>
                <div>{props.time}</div>
                <div>{props.type}</div>
                <div>{props.wallet}</div>
                <div>
                    <img src={props.ico} alt=""/>
                    {props.asset}
                </div>
                <div>{props.amount}</div>
                <div>{props.destination}</div>
                <div>{props.txid}</div>
                <div>{props.status}</div>
            </article>
        </div>
    );
};

export default HistoryItem;