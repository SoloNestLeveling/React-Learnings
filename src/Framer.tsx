import styled from "styled-components";
import { motion } from "framer-motion";

export const FramerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
background: linear-gradient(45deg, #CCD5AE,#E0E5B6,#FAEDCE);
    
`

export const AnimeBox = styled(motion.div)`
    display: flex;
    width: 200px;
    height: 200px;
    background-color: #667BC6;
`


// animate를 하고 싶다면 일반적인 div로는 불가능하다. framer 패키지에서 제공해주는 html코드로만 가능
// 예) <div></div> (X) ,   <motion.div> </motion.div> (o)

// variants : 설정들을 오브젝트에 담아서 관리하고 사용 할 수 있다.
// 부모 컴포넌트에 설정한 variants는 자식들이 받아서 사용 할 수 있다.
function Framer() {

    const myVars = {
        start: { scale: 0 },
        end: { borderRadius: 20, scale: 1, rotate: 180, transition: { duration: 0.4, type: "spring", damping: 12 } }
    }
    return (
        <FramerContainer>
            <AnimeBox variants={myVars} initial="start" animate="end"></AnimeBox>
        </FramerContainer>
    );
};

export default Framer;