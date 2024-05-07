const DeerIconComponent = (props) => {
    const width = props.width;
    const height = props.height;
    const animal = props.animal;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox={`0 0 ${width} ${height}`}
             fill="none">
            <path
                d="M36 27C36 34.217 30.627 44 24 44C17.373 44 12 34.217 12 27C12 19.784 13.5 16 24 16C34.5 16 36 19.784 36 27Z"
                stroke={animal === "deer" ? "#EB604A" : "#A4A4A4"} strokeWidth="3"/>
            <path
                d="M36.5252 15.0255C38.4779 13.0728 41.1688 12.598 42.5356 13.9648C43.9025 15.3316 43.4276 18.0226 41.475 19.9752C39.5224 21.9278 36.8314 22.4027 35.4646 21.0359C34.0977 19.669 34.5726 16.9781 36.5252 15.0255Z"
                stroke={animal === "deer" ? "#EB604A" : "#A4A4A4"} strokeWidth="3"/>
            <path
                d="M6.52524 19.975C8.47786 21.9277 11.1688 22.4025 12.5356 21.0357C13.9025 19.6689 13.4276 16.9779 11.475 15.0253C9.52237 13.0727 6.83141 12.5978 5.46458 13.9646C4.09774 15.3315 4.57262 18.0224 6.52524 19.975Z"
                stroke={animal === "deer" ? "#EB604A" : "#A4A4A4"} strokeWidth="3"/>
            <path d="M12 4C12 10.627 17.373 16 24 16C30.627 16 36 10.627 36 4"
                  stroke={animal === "deer" ? "#EB604A" : "#A4A4A4"}
                  strokeWidth="3" strokeLinecap="round"/>
            <path d="M18 7C18 11.97 20.686 16 24 16C27.314 16 30 11.97 30 7"
                  stroke={animal === "deer" ? "#EB604A" : "#A4A4A4"}
                  strokeWidth="3" strokeLinecap="round"/>
            <path
                d="M20 28C21.1046 28 22 27.1046 22 26C22 24.8954 21.1046 24 20 24C18.8954 24 18 24.8954 18 26C18 27.1046 18.8954 28 20 28Z"
                fill={animal === "deer" ? "#EB604A" : "#A4A4A4"}/>
            <path
                d="M24 36C25.1046 36 26 35.1046 26 34C26 32.8954 25.1046 32 24 32C22.8954 32 22 32.8954 22 34C22 35.1046 22.8954 36 24 36Z"
                fill={animal === "deer" ? "#EB604A" : "#A4A4A4"}/>
            <path
                d="M28 28C29.1046 28 30 27.1046 30 26C30 24.8954 29.1046 24 28 24C26.8954 24 26 24.8954 26 26C26 27.1046 26.8954 28 28 28Z"
                fill={animal === "deer" ? "#EB604A" : "#A4A4A4"}/>
        </svg>
    );
}

export default DeerIconComponent