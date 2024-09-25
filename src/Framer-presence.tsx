import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";


const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background: linear-gradient(45deg, rgb(255, 174, 0),rgb(255, 182, 45), rgb(255, 209, 135));
`

const Box = styled(motion.div)`
display: flex;
    width: 240px;
    height: 240px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: white;
    top:50px;
`

//AnimatePresence 컴포넌트는 사라지는 요소에 애니메이션 효과를 준다.
// AnimatePresence 내부에는 반드시 조건문이 있어야한다.
// <Box variants={myVars} initial="initial" animate="visible" exit="leaving" /> exit가 사라질때 애니메이션이다.


// variants 객체의 상태가 함수로 정의되면, 해당 함수는 motion 요소의 프로퍼티인 custom 값을 받아서 동작을 제어할 수 있습니다. 
// mode="wait" 적용시 이전 요소가 완전히 사라지면 다음 요소가 등장
function FramerPreSence() {

    const [num, setNum] = useState(1)
    const [isBack, setIsBack] = useState(false)
    const onClick = () => {
        setIsBack(false)
        setNum((prev) => num === 10 ? 10 : prev + 1)
    }

    const onBack = () => {
        setIsBack(true)
        setNum((prev) => num === 1 ? 1 : prev - 1)
    }

    const myVars = {
        initial: (isBack: boolean) => ({
            opacity: 0,
            scale: 0,
            x: isBack ? -200 : 200
        }),

        visible: { opacity: 1, scale: 1, x: 0 },

        leaving: (isBack: boolean) => ({
            opacity: 0,
            scale: 0,
            x: isBack ? 200 : -200
        }),
    };

    return (
        <Header>
            <AnimatePresence custom={isBack}>
                <Box
                    key={num}
                    custom={isBack}
                    variants={myVars}
                    initial="initial"
                    animate="visible"
                    exit="leaving"
                    transition={{ duration: 0.5 }}
                >{num}</Box>
            </AnimatePresence>
            <button onClick={onClick}>Front</button>
            <button onClick={onBack}>Back</button>
        </Header>

    );
};

export default FramerPreSence;



/*
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => number === num
                    ? <Box key={number} variants={myVars} initial="initial" animate="visible" exit="leaving"
                        transition={{ duration: 0.5 }}
                    >{number}</Box> : null)}

                    이렇게 조건문으로 할 필요없이 key값만 넣어줘도 key가 변할때마다 리렌더링 되면서 애니메이션이 실헹된다.
                    즉, 새로운 key 값이 들어보면 전에 key값은 사라진 것으로 인식하고 exit가 실행된다.
 */