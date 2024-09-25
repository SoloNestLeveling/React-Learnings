import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Board, DropBg } from "./Dnd-styled";
import { useRecoilState } from "recoil";
import { Drops } from "./todo_components/atoms";
import DraggableCard from './DndCom/Draggable'
import { useState } from "react";
import DropBord from "./DndCom/Drop-bord";



// react-beautiful-dnd : 드롭앤드롭 애니메이션 구현 라이브러리
// DragDropContext는 드래그앤드롭을 실행 할 특정 부분을 포함하는 container다.
// DragDropContext는 한개의 props를 받는다, onDragEnd()
//DragDropContext는 반드시 children을 포함해야한다.
// children: 1.Droppable: 유저가 드롭 할 수 있는 공간, 2.Draggable: 유저가 드래그 할 수 있는 공간.
// 트리 관계:  DragDropContext > Droppable > Draggable 
// onDragEnd라는 함수는 유저가 드래그를 끝낸 시점에 콜되는 함수


// 규칙
// Droppable은 여러개일 수 있어서 id 값이 속성으로 반드시 제공되어야 한다. droppableId
// Droppable의 children으로 react를 그대로 사용 할 수없다. <ul></ul> (X), 함수로 선언 {()=><ul></ul>}
// Draggable의 children 또한 동일하다.
// Draggable은 필수 입력 속성값으로 draggableId와 index값을 전달해야한다.



// 첫번째 ()=> 함수의 기능
// 첫번째 함수 인자로 provided를 받는다 (이름은 마음대로)
// provided의 type definition을 확인하면 placeholder와 drppableProps를 가지고 있다.
// 여기서 droppableProps가  <ul>이 필요로 하는 Prop이다.

// 두번째 ()=> 함수의 기능
// 인자 이름은 첫번째 함수 인자와 동일해도 상관 없다.
//두번째 인자의 type definition을 보면 draggableProps와 dragHandleProps를 가지고 있다.
// draggableProps: 드래그 요소의 전체 영역을 드래그 가능 영역으로 하고싶을때 선택
// dragHandleProps: 드래그 요소에서 특정 부분을 드래그 가능 영역으로 만들고 싶을때 선택
// 드래그를 적용시키고 싶은 특정 요소가 있으면 그 요소 안에 dragHandleProps를 적용한다.


// magic의 속성중 하나인 placeholder는 드래그시 드래그 요소를 담고있는 container의 크기를 제어한다.
// 드래그 하려고 요소를 끌어오면 container의 크기가 작아지는 container 맨 뒤에 {magin.placeholder}를
// 선언하면 크기가 작아지지 않는다.


// onDragEnd(): 드래그가 끝이나면 콜되는 함수 
// onDragEnd() 함수는 하나의 인자를 받는데 그 인자에는 드래그한 요소의 정보를 담고 있다. 예(id)
// destination 목록에는 요소가 마지막에 놓아진 곳의 index를 가지고 있다.
// source에는 요소가 처음 위치했던 곳의 index를 가지고 있다.


// react특징 중 State의 상태가 변하면 리렌더링이 발생한다.
// 만약 부모의 상태가 변경되면 부모에 포함된 모든 자식들이 전부 리렌더링된다...
// 이것은 퍼포먼스의 영향을 줄 수 있기때문에 상태가 변해도 다른 특정한 컴포넌트의 리렌더링을 방지해야한다.
// React.memo를 사용하면 특정 컴포넌트를 리렌더링 되지 않도록 할 수 있다.
function Dnd() {

    const [drops, setDrops] = useRecoilState(Drops)
    const [isDrag, setIsDrag] = useState(false)


    const onDragStart = () => {
        setIsDrag(true)
    }

    const onDragEnd = ({ destination, source, draggableId }: DropResult) => {

        setIsDrag(false)

        console.log(draggableId)

        if (!destination) {
            return
        }

        console.log(destination, source)

        if (destination.droppableId === source.droppableId) {

            setDrops((prevs) => {

                const oldBoard = [...prevs[source.droppableId]]
                oldBoard.splice(source.index, 1);
                oldBoard.splice(destination.index, 0, draggableId);


                return {
                    ...prevs,
                    [source.droppableId]: oldBoard
                };
            });
        } else {

            setDrops((prevs) => {

                const sourceBoard = [...prevs[source.droppableId]];
                const destinationBoard = [...prevs[destination.droppableId]];
                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination.index, 0, draggableId);

                return {
                    ...prevs,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
                }

            })
        }
    }
    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <DropBg>
                {Object.keys(drops).map((boardId) => <DropBord key={boardId} boardId={boardId} drops={drops[boardId]} isDrag={isDrag} />)}
            </DropBg>

        </DragDropContext>
    );
};


export default Dnd;