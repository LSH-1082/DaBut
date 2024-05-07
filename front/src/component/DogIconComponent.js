const DogIconComponent = (props) => {
    const width = props.width;
    const height = props.height;
    const animal = props.animal;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
             fill="none">
            <path
                d="M20 10.3442C20 7.56422 16.846 5.35822 13 6.00022C7.35396 6.94022 4.77396 18.0122 4.99996 20.0002C5.15996 21.4062 8.44996 23.4442 12.312 22.0002C14.834 21.0562 16.232 19.1002 17 17.0002M28.534 10.3442C28.534 7.56422 31.688 5.35822 35.534 6.00022C41.18 6.94022 43.76 18.0122 43.534 20.0002C43.374 21.4062 40.084 23.4442 36.222 22.0002C33.7 21.0562 32.512 19.1002 31.744 17.0002M16 28.0002V29.0002M32 28.0002V29.0002M22.5 32.5002H25.5L24 34.0002L22.5 32.5002Z"
                stroke={animal === "dog" ? "#EB604A" : "#A4A4A4"} strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            <path
                d="M8.84 22.494C8.28129 24.6557 7.99903 26.8794 8 29.112C8 37.456 15.164 42 24 42C32.836 42 40 37.456 40 29.112C40 26.99 39.676 24.712 39.014 22.494M20.528 10.33C21.6719 10.1079 22.8347 9.9974 24 10C25.56 10 27 10.216 28.322 10.612"
                stroke={animal === "dog" ? "#EB604A" : "#A4A4A4"} strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    );
}

export default DogIconComponent