import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";

const Header = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, rgb(178, 200, 48), rgb(94, 109, 5),rgb(47, 56, 0));
`

const Grid = styled.div`
    display: grid;
    width: 500px;
    height: 300px;
    grid-template-areas: 
    'a a b'
    'c d d';
    gap: 20px;
`

const Box = styled(motion.div)`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(255,255,255);
`

const LayOut = styled(motion.div)`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
`


function FramerLayout2() {

    const [id, setId] = useState<string | null>(null)


    const myVars = {
        initial: { backgroundColor: "rgba(0,0,0,0.0)" },
        visible: { backgroundColor: "rgba(0,0,0,0.4)" },
        leaving: { backgroundColor: "rgba(0,0,0,0.0)" },
    }

    console.log(id)

    return (
        <Header>
            <AnimatePresence >
                <Grid>
                    {['a', 'b', 'c', 'd'].map((i) =>
                        <Box onClick={() => { setId(i) }} layoutId={i} key={i} style={{ gridArea: i }}>{i}</Box>)}
                </Grid>


                {id ? <LayOut onClick={() => { setId(null) }} variants={myVars} initial="initial" animate="visible" exit="leaving">
                    <Box layoutId={id} style={{ width: 300, height: 160 }} />
                </LayOut> : null}
            </AnimatePresence>

        </Header>

    );
};

export default FramerLayout2;