import React from 'react';
import Select from 'react-select';
import {useDispatch} from "react-redux";
import {setMajor} from "../../store/user";

import "./MajorSelect.css";


const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#F2F4F5',
        color: '#000',
        borderRadius: '30px',
        padding: '4px 5px',
        border: 'none',
        fontFamily: 'Pretendard',
        textAlign: 'center',
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor: '#fff',
        maxHeight: '100px', // 전체 셀렉트 박스의 최대 높이
        overflowY: 'auto',
    }),
    option: (provided, state) => ({
        ...provided,
        textAlign: 'center',
        backgroundColor: state.isFocused ? '#EB604A' : '#fff',
        color: state.isFocused ? '#fff' : '#A0A0A0',
        fontSize: '17px',
        fontFamily: 'Pretendard',

    })
};

const options = [
    {value: "공대", label: "공대"},
    {value: "예체능", label: "예체능"},
    {value: "의대", label: "의대"},
];

const MajorSelect = (props) => {
    let dispatch = useDispatch();
    const defaultOption = options.find(option => option.value === props.major) || "";

    return (
        <div className="majorSelect">
            <Select className="majorSelector" onChange={(e) => {
                dispatch(setMajor(e.value))
            }} isSearchable={false} options={options} value={defaultOption} styles={customStyles} placeholder="" components={{IndicatorSeparator: () => null,}}/>
        </div>
    );
};

export default MajorSelect;
