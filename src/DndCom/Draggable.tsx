import { Draggable } from "react-beautiful-dnd";
import { Wrapper } from "../Dnd-styled";
import { memo } from "react";
import React from "react";


export interface IDraggableProps {
    draggableId: string
    index: number,
    isDragDisabled: boolean
}

function DraggableCard({ draggableId, index, isDragDisabled }: IDraggableProps) {
    return (

        <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>

            {
                (magic) =>
                    <Wrapper ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                        <li>{draggableId}</li>
                    </Wrapper>
            }
        </Draggable>

    );
};

export default memo(DraggableCard);