import React from 'react';
import Select from 'react-select';

import "./AgeSelect.css";

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#F2F4F5',
        color: '#000',
        borderRadius: '30px',
        padding: '4px 5px',
        border: 'none',
        fontFamily: 'font-family: Pretendard',
        textAlign: 'center',
    }),
    option: (provided) => ({
        ...provided,
        backgroundColor: '#fff',
        color: '#000',
    })
};

const options = [
    { value: 20, label: '20' },
    { value: 21, label: '21' },
    { value: 22, label: '22' }
];

const AgeSelect = () => {
    return (
        <div className="Select">
            <Select className="Selector" options={options} styles={customStyles}/>
        </div>
    );
};

export default AgeSelect;
