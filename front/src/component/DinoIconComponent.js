const DinoIconComponent = (props) => {
    const width = props.width;
    const height = props.height;
    const animal = props.animal;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
             fill="none">
            <path
                d="M21.6668 2.8335V4.25016H20.0002V12.7502H18.3335V14.1668H15.0002V15.5835H13.3335V17.0002H11.6668V18.4168H8.3335V17.0002H6.66683V15.5835H5.00016V12.7502H3.3335V21.2502H5.00016V22.6668H6.66683V24.0835H8.3335V25.5002H10.0002V31.1668H13.3335V29.7502H11.6668V28.3335H13.3335V26.9168H15.0002V25.5002H16.6668V26.9168H18.3335V31.1668H21.6668V29.7502H20.0002V24.0835H21.6668V22.6668H23.3335V21.2502H25.0002V17.0002H26.6668V18.4168H28.3335V15.5835H25.0002V12.7502H33.3335V11.3335H28.3335V9.91683H36.6668V4.25016H35.0002V2.8335M23.3335 4.25016H25.0002V5.66683H23.3335V4.25016Z"
                fill={animal === "dino" ? "#EB604A" : "#A4A4A4"}/>
        </svg>
    );
}

export default DinoIconComponent