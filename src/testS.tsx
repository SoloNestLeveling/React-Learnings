import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";



const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    width: 100%;
    gap: 10px;
    height: auto;
    grid-auto-flow: dense;
`

const Box = styled(motion.div)`
    background-color: palegoldenrod;
    width: 100%;
    height: 100px;
    &:nth-child(odd){
        background-color: #328ed0;
    }

`

const boxVars = {
    normal: { scale: 1 },
    hover: { scale: 1.5, y: 50, transition: { delay: 0.5, duration: 0.3 }, }
}

function Test() {

    return (
        <AnimatePresence>
            <Row>
                {[1, 2, 3, 4, 5, 6].map((i) => <Box
                    variants={boxVars}
                    initial="normal"
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    key={i}
                >i</Box>)}
            </Row>
        </AnimatePresence>
    )

}

export default Test;