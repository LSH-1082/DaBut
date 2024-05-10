import React from 'react';
import Select from 'react-select';
import "./WeightSelect.css";
import {useDispatch} from "react-redux";
import {setRoomWantUniv} from "../../store/roommate";

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
    { value: "대가대", label: "대가대" },
    { value: "경일대", label: "경일대" },
    { value: "영남대", label: "영남대" },
    { value: "대구대", label: "대구대" },
];

const RoomUnivSelect = () => {
    const dispatch = useDispatch();


    return (
        <div className="weightSelect">
            <Select className="weightSelector" onChange={(e) => {dispatch(setRoomWantUniv(e.value))}} placeholder="" options={options} styles={customStyles} isSearchable={false} components={{IndicatorSeparator: () => null,}}/>
        </div>
    );
};

export default RoomUnivSelect;
