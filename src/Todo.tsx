import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IToDoAtom, ProgressEnum, toDoAtom, toDoProgress, toDoSelector } from "./todo_components/atoms";
import ToDoInput from "./todo_components/To-Do-Input";
import ToDoList from "./todo_components/To-Do-List";

const Todo = () => {


    const toDos = useRecoilValue(toDoSelector);
    const [progress, setProgress] = useRecoilState(toDoProgress)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProgress(event.target.value as any)
    };



    return (
        <div>
            <ToDoInput />

            <select value={progress} onChange={onChange}>
                <option value={ProgressEnum.TODO}>TODO</option>
                <option value={ProgressEnum.DOING}>DOING</option>
                <option value={ProgressEnum.DONE}>DONE</option>
            </select>
            {toDos.map((todo) =>
                <ToDoList key={todo.id} {...todo} />)}


        </div>
    );
};


export default Todo;