import { Droppable } from "react-beautiful-dnd"
import { Board, DropBg } from "../Dnd-styled"
import DraggableCard from './Draggable'


interface IBoardProps {
    isDrag: boolean
    drops: string[]
    boardId: string
}

function DropBoard({ drops, isDrag, boardId }: IBoardProps) {

    return (
        <Droppable droppableId={boardId}>
            {(magic) =>  // ()=> 함수의 기능 참조  
                <Board ref={magic.innerRef} {...magic.droppableProps}>

                    {drops.map((drop, index) =>
                        // 키 값과 draggableId 값은 beautiful-dnd에서는 항상 같아야한다.
                        <DraggableCard key={drop} draggableId={drop} index={index} isDragDisabled={isDrag} />

                    )}

                    {magic.placeholder}
                </Board>}
        </Droppable>


    )

}

export default DropBoard