import CatIconComponent from "./animalIcon/CatIconComponent";
import DogIconComponent from "./animalIcon/DogIconComponent";
import BearIconComponent from "./animalIcon/BearIconComponent";
import DeerIconComponent from "./animalIcon/DeerIconComponent";
import DinoIconComponent from "./animalIcon/DinoIconComponent";
import FoxIconComponent from "./animalIcon/FoxIconComponent";
import FrogIconComponent from "./animalIcon/FrogIconComponent";
import RabbitIconComponent from "./animalIcon/RabbitIconComponent";
import HamsterIconComponent from "./animalIcon/HamsterIconComponent";

export const renderIcon = (data) => {
    switch (data) {
        case 'cat':
            return <CatIconComponent width={47} height={49}/>;
        case 'dog':
            return <DogIconComponent width={47} height={48}/>;
        case 'bear':
            return <BearIconComponent width={44} height={44}/>;
        case 'deer':
            return <DeerIconComponent width={48} height={48}/>;
        case 'dino':
            return <DinoIconComponent width={40} height={35}/>;
        case 'fox':
            return <FoxIconComponent width={36} height={38}/>;
        case 'frog':
            return <FrogIconComponent width={44} height={36}/>;
        case 'rabbit':
            return <RabbitIconComponent width={45} height={44}/>;
        case 'hamster':
            return <HamsterIconComponent width={36} height={35} vWidth={36} vHeight={35}/>;
    }
}

export const renderInsta = (data) => {
    switch (data) {
        case 0:
            return <p>인스타 안해!</p>;
        case 1:
            return <p>인스타 계정은 있어!</p>;
        case 2:
            return <p>인스타 가끔씩 해!</p>;
        case 3:
            return <p>인스타 거의 매일 접속해!</p>;
        case 4:
            return <p>맛집에 가면 스토리는 무조건!</p>;
    }
}

export const renderPersonality = (data) => {
    switch (data) {
        case "activity":
            return <p>활발한</p>;
        case "enthusiastic":
            return <p>적극적</p>;
        case "positive":
            return <p>긍정적</p>;
        case "clean":
            return <p>깔끔한</p>;
        case "timid":
            return <p>소심한</p>;
        case "lively":
            return <p>발랄한</p>;
    }
}

export const renderPurpose = (data) => {
    switch (data) {
        case "sports":
            return <p>운동/스포츠</p>;
        case "pet":
            return <p>반려동물</p>;
        case "cook":
            return <p>요리/베이킹</p>;
        case "roommate":
            return <p>룸메이트</p>;
        case "study":
            return <p>스터디</p>;
        case "read":
            return <p>독서</p>;
        case "eat":
            return <p>밥친구</p>;
        case "baby":
            return <p>육아</p>;
        case "single":
            return <p>돌싱</p>;
        case "game":
            return <p>게임</p>;
        case "trip":
            return <p>여행</p>;
        case "paint":
            return <p>그림</p>;
        case "music":
            return <p>음악</p>;
        case "ott":
            return <p>OTT</p>;
        case "dance":
            return <p>춤</p>;
        case "photo":
            return <p>사진</p>;
    }
}