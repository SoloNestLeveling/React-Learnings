import styled from "styled-components";
import { motion, stagger } from "framer-motion";

export const FramerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
background: linear-gradient(45deg, #CCD5AE,#E0E5B6,#FAEDCE);
    
`

export const AnimeBox = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.3);
`

export const Circle = styled(motion.div)`
    display: flex;
    place-self: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    
`


// animate를 하고 싶다면 일반적인 div로는 불가능하다. framer 패키지에서 제공해주는 html코드로만 가능
// 예) <div></div> (X) ,   <motion.div> </motion.div> (o)

// variants : 설정들을 오브젝트에 담아서 관리하고 사용 할 수 있다.
// 부모 컴포넌트에 설정한 variants는 자식들이 받아서 사용 할 수 있다.
function FramerCircle() {

    const myVars = {
        start: { opacity: 0 },
        end: {
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                delayChildren: 1,
                staggerChildren: 0.5,
            },


        },
    };

    const circleVars = {
        start: {
            opacity: 0,
            y: 10
        },
        end: {
            opacity: 1,
            y: 0,
            transition: {
                bounce: 10,

            }
        },
    };
    return (
        <FramerContainer>
            <AnimeBox variants={myVars} initial="start" animate="end">
                <Circle variants={circleVars} />
                <Circle variants={circleVars} />
                <Circle variants={circleVars} />
                <Circle variants={circleVars} />
            </AnimeBox>
        </FramerContainer>
    );
};

export default FramerCircle;