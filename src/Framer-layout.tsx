import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Header = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, rgb(178, 200, 48), rgb(94, 109, 5),rgb(47, 56, 0));
`

const Box = styled(motion.div)`
    display: flex;
    width: 300px;
    height: 300px;
    margin-right: 100px;
    background-color: white;
    justify-content: center;
    align-items: center;
`


const Circle = styled(motion.div)`
    width: 80px;
    height: 80px;
    background-color: #00006d;
`


//layout 속성을 사용하면, 요소의 레이아웃 변경(위치, 크기 등)을 자동으로 감지하고, 
// 이러한 변경이 있을 때 애니메이션을 적용할 수 있습니다.

function FramerLayout() {

    const [click, setClick] = useState(false);

    const onToggle = () => {
        setClick((prev) => !prev)
    };


    return (
        <Header onClick={onToggle}>
            <Box> {click ? null : <Circle layoutId="magic" />}</Box>
            <Box> {!click ? null : <Circle layoutId="magic" style={{ background: "rgb(123,100,200)", borderRadius: "50%" }} />}</Box>
        </Header>

    )
};

export default FramerLayout;