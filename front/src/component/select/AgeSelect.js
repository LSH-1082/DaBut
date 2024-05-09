import React from 'react';
import Select from 'react-select';
import "./AgeSelect.css";
import {useDispatch} from "react-redux";
import {setAge} from "../../store/user";

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
        maxHeight: '200px', // 전체 셀렉트 박스의 최대 높이
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
    { value: 20, label: '20' },
    { value: 21, label: '21' },
    { value: 22, label: '22' },
    { value: 23, label: '23' },
    { value: 24, label: '24' },
    { value: 25, label: '25' },
    { value: 26, label: '26' },
    { value: 27, label: '27' },
    { value: 28, label: '28' }
];

const AgeSelect = () => {
    let dispatch = useDispatch();


    return (
        <div className="Select">
            <Select className="Selector" onChange={(e) => {dispatch(setAge(e.value))}} placeholder="" options={options} styles={customStyles} isSearchable={false} components={{IndicatorSeparator: () => null,}}/>
        </div>
    );
};

export default AgeSelect;
