import React from 'react';
import Select from 'react-select';
import "./WantAgeSelect.css";
import {useDispatch} from "react-redux";
import {setWantAge} from "../../store/user";

import "./StateSelect.css";

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
        maxHeight: '100px', // 전체 셀렉트 박스의 최대 높이
        overflowY: 'auto', // 메뉴 전체에 스크롤 적용
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#EB604A' : '#fff',
        textAlign: 'center',
        color: '#000',
    })
};

const options = [
    { value: '20대', label: '20대' },
    { value: '30대', label: '30대' },
    { value: '40대', label: '40대' },
    { value: '50대', label: '50대' },
];

const StateSelect = (props) => {
    let dispatch = useDispatch();
    const defaultOption = options.find(option => option.value === props.wantAge) || "";

    return (
        <div className="wantAgeSelect">
            <Select className="wantAgeSelector" onChange={(e) => {dispatch(setWantAge(e.value))}} value={defaultOption} placeholder="" options={options} styles={customStyles} isSearchable={false} components={{IndicatorSeparator: () => null,}}/>
        </div>
    );
};

export default StateSelect;
