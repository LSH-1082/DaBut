import React from 'react';
import Select from 'react-select';
import "./AgeSelect.css";
import {useDispatch} from "react-redux";
import {setState} from "../../store/user";

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
    { value: '서울/인천/경기도', label: '서울/인청/경기도' },
    { value: '강원도', label: '강원도' },
    { value: '충청남도/대전', label: '충청남도/대전' },
    { value: '충청북도', label: '충청북도' },
    { value: '경상북도/대구', label: '경상북도/대구' },
    { value: '경상남도/울산/부산', label: '경상남도/울산/부산' },
    { value: '전라북도', label: '전라북도' },
    { value: '전라남도/광주', label: '전라남도/광주' },
    { value: '제주도', label: '제주도' },
];

const StateSelect = () => {
    let dispatch = useDispatch();


    return (
        <div className="StateSelect">
            <Select className="StateSelector" onChange={(e) => {dispatch(setState(e.value))}} placeholder="" options={options} styles={customStyles} isSearchable={false} components={{IndicatorSeparator: () => null,}}/>
        </div>
    );
};

export default StateSelect;
