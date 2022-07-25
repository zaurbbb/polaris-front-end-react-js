import React from 'react';
// import css from "../../../Styles/Slogan.module.sass";

const DropdownList = ({ label, value, options, onChange }) => {

    return (
        <label>
            {label}
            <select onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

export default DropdownList;