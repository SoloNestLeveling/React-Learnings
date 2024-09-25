import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";

export const FramerContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200vh;
background: linear-gradient(45deg, #CCD5AE,#E0E5B6,#FAEDCE);
    
`

export const LimitSpace = styled(motion.div)`
display: flex;
justify-content: center;
width: 700px;
height: 300px;
align-items: center;
background-color: rgba(255,255,255,0.4);
border-radius: 30px;
    
`

export const AnimeBox = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.3);
`


// drag를 사용하면 제약 없이 화면 아디로든 드래그가 가능하다.
// drag애 값을 전달 할 수 있다. 그값들이 곧 제약인 된다. 'x','y'
// dragConstraints 제약 공간을 설정한다.
// dragElastic 제약 공간에서 어느정도 벗어나서 이동 가능한지 0.5 , 0 ,1의 값으로 설정 0.5가 기본
// dragSnapToOrigin={true} 제약 공간으로 벗어난 상태에서 드롭하면 중앙으로 오게한다. boolean 값

//motion value: 드래그시 좌표값을 추적하는기능
//motion value는 리랜더링 되지 않는다.

function FramerEvent() {

    const myVars = {
        hover: { scale: 1 },
        tap: { borderRadius: "50%" },
        drag: { backgroundColor: "rgb(158,17,211)" }
    };

    // ref를 사용하여 LimitSpace에서 ref로 값을 참조하고  dragConstraints에 값으로 넣어주면 자동으로
    //  LimitSpace가 제약 공간이 된다.
    //  useMotionValueEvent(x, "change", () => console.log(x.get())) 드래그 할때 좌표를 콘솔한다.
    const constraintsBox = useRef(null)

    const x = useMotionValue(0)

    const { scrollYProgress } = useScroll()



    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const bgColor = useTransform(x, [-400, 0, 400], ["rgb(3, 57, 111)", "rgb(255,255,255)", "rgb(27, 199, 102)"]);

    const mainBg = useTransform(scrollYProgress, [0, 1],
        [" linear-gradient(45deg, #CCD5AE,#E0E5B6,#FAEDCE)",
            " linear-gradient(45deg, #05850f,#00d262,#00c46f)"
        ])

    return (
        <FramerContainer style={{ background: mainBg }}>
            <LimitSpace ref={constraintsBox} >
                <AnimeBox
                    variants={myVars}
                    drag={'x'}
                    style={{ x, scale, backgroundColor: bgColor }}
                    dragConstraints={constraintsBox}
                    dragElastic={0.5}
                    dragSnapToOrigin={true}
                    whileDrag="drag"
                    whileHover="hover"
                    whileTap="tap" />

            </LimitSpace>
        </FramerContainer>
    );
};

export default FramerEvent;