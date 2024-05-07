const FoxIconComponent = (props) => {
    const width = props.width;
    const height = props.height;
    const animal = props.animal;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}
             fill="none">
            <path
                d="M11.9702 20.5435C11.9702 19.7288 12.64 19.0591 13.4546 19.0591C14.2692 19.0591 14.939 19.7288 14.939 20.5435V22.3247C14.939 22.7184 14.7826 23.0959 14.5042 23.3743C14.2258 23.6527 13.8483 23.8091 13.4546 23.8091C13.0609 23.8091 12.6834 23.6527 12.405 23.3743C12.1266 23.0959 11.9702 22.7184 11.9702 22.3247V20.5435ZM21.969 20.5435C21.969 19.7288 22.6387 19.0591 23.4533 19.0591C24.268 19.0591 24.9377 19.7288 24.9377 20.5435V22.3247C24.9377 22.7184 24.7813 23.0959 24.503 23.3743C24.2246 23.6527 23.847 23.8091 23.4533 23.8091C23.0597 23.8091 22.6821 23.6527 22.4037 23.3743C22.1254 23.0959 21.969 22.7184 21.969 22.3247V20.5435Z"
                fill={animal === "fox" ? "#EB604A" : "#A4A4A4"}/>
            <path
                d="M23.3605 1.79408C22.5811 2.44092 21.885 3.18205 21.2883 4.00045C20.5426 4.99558 19.9346 6.09046 19.4809 7.2542L19.0059 8.31227H19.1187H17.8588C17.0988 5.75357 15.6065 3.47325 13.566 1.75252C13.1527 1.43105 12.6518 1.24227 12.1291 1.21102C11.7899 1.16239 11.4442 1.18354 11.1135 1.27318C10.7827 1.36283 10.4737 1.51906 10.2054 1.73233L10.2018 1.73589C9.28743 2.4757 8.5963 3.3592 8.03105 4.29495C6.34347 6.65049 5.43685 9.47584 5.43874 12.3735V21.3748H3.12312C2.82684 21.374 2.53447 21.4423 2.26919 21.5742C2.00391 21.7062 1.77301 21.8981 1.5948 22.1348C1.41165 22.3729 1.28665 22.6506 1.22974 22.9456C1.17284 23.2406 1.18562 23.5449 1.26705 23.8341C2.33176 27.5646 4.58047 30.8479 7.67411 33.1889C10.7677 35.5298 14.5386 36.8015 18.4181 36.8123H18.5844C22.4651 36.8024 26.2373 35.5303 29.3314 33.1881C32.4256 30.8458 34.6738 27.5605 35.7366 23.8281C35.8158 23.5404 35.8274 23.2382 35.7706 22.9452C35.7139 22.6521 35.5902 22.3762 35.4094 22.1388C35.2285 21.9014 34.9953 21.7089 34.7278 21.5764C34.4604 21.4439 34.166 21.3749 33.8675 21.3748H31.5519V12.3735C31.5558 8.84821 30.2121 5.45471 27.7958 2.88777C27.4249 2.46837 27.0184 2.08179 26.581 1.73233C26.1338 1.37768 25.5795 1.18549 25.0087 1.18727C24.4369 1.18506 23.8812 1.37725 23.4329 1.73233L23.3605 1.79408ZM7.81849 12.3747C7.81419 10.9873 8.06246 9.61073 8.55118 8.31227H9.39905C8.73439 9.86677 8.39298 11.5403 8.39562 13.2309V16.3279C8.74268 15.7015 9.13981 15.1043 9.58311 14.5419C11.0675 12.6609 13.0174 11.262 15.2356 10.5566C15.0684 9.78712 14.8275 9.03552 14.516 8.31227H15.3639C15.5432 8.78964 15.6928 9.28127 15.8092 9.78239L16.0312 10.6873H20.9534L21.1755 9.78121C21.2911 9.28234 21.4395 8.79163 21.6196 8.31227H22.4509C22.1395 9.0376 21.8985 9.79116 21.7312 10.5626C23.9566 11.268 25.9136 12.6668 27.3956 14.5407C27.835 15.0965 28.2328 15.6938 28.5831 16.3279V13.2665C28.5831 11.5209 28.2281 9.83464 27.5714 8.31227H28.4442C28.9335 9.61016 29.1818 10.9865 29.1769 12.3735V21.6004C29.1775 22.1702 29.4041 22.7166 29.8071 23.1195C30.21 23.5225 30.7564 23.7491 31.3262 23.7498H33.2785C33.2144 23.9457 33.1479 24.1393 33.0766 24.3316H26.4456C24.5524 24.3321 22.6942 24.8423 21.0662 25.8089C21.3061 25.1071 20.805 24.2841 19.9678 24.2841H16.9516C16.7731 24.2828 16.5968 24.3226 16.4362 24.4005C16.2757 24.4784 16.1352 24.5922 16.0257 24.7331C15.9163 24.874 15.8408 25.0383 15.8051 25.2131C15.7694 25.3879 15.7744 25.5686 15.8199 25.7412C14.2194 24.8182 12.4044 24.3321 10.5569 24.3316H3.92587C3.85462 24.1393 3.78693 23.9457 3.7228 23.7498H5.66437C6.23484 23.7504 6.78222 23.5245 7.18616 23.1216C7.5901 22.7188 7.81755 22.1721 7.81849 21.6016V12.3747ZM11.9071 6.3992C12.2752 6.81483 12.6029 7.26252 12.8867 7.73514L13.091 8.07595C13.3784 8.62933 13.6194 9.21239 13.8118 9.81802C12.2253 10.4969 10.791 11.487 9.5938 12.7298C9.69712 10.3512 10.5331 8.1282 11.9071 6.3992ZM32.5779 25.5191C31.3304 28.1791 29.3526 30.4297 26.8751 32.0086C24.3976 33.5876 21.5223 34.4298 18.5844 34.4373H18.4181C15.4801 34.4295 12.6048 33.5871 10.1272 32.0082C7.64949 30.4293 5.67143 28.1789 4.42343 25.5191H10.5569C12.5116 25.5192 14.417 26.1322 16.0051 27.2719L16.0075 27.2731L17.8897 28.615C17.8479 29.2276 17.5752 29.8016 17.1267 30.221C16.6781 30.6404 16.0872 30.8741 15.4731 30.8748C15.1406 30.8748 14.8794 31.136 14.8794 31.4685C14.8794 31.801 15.1406 32.0623 15.4731 32.0623C16.7319 32.0623 17.8481 31.4091 18.5012 30.4354C19.1425 31.4091 20.2587 32.0623 21.5175 32.0623C21.8381 32.0623 22.0994 31.801 22.0994 31.4685C22.0994 31.136 21.8381 30.8748 21.5056 30.8748C20.235 30.8748 19.1817 29.8891 19.0902 28.6304L20.995 27.2731H20.9974C22.5854 26.1332 24.4908 25.5198 26.4456 25.5191H32.5779ZM23.1551 9.82277C23.5482 8.55808 24.1762 7.37887 25.0064 6.34695C26.4147 8.0712 27.2721 10.3168 27.3837 12.7298C26.1824 11.4882 24.7446 10.4997 23.1551 9.82277Z"
                fill={animal === "fox" ? "#EB604A" : "#A4A4A4"}/>
        </svg>
    );
}

export default FoxIconComponent