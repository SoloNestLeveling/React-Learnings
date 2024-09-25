import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IToDoAtom, ProgressEnum, toDoAtom } from "./atoms";
import React from "react";



const ToDoList = ({ text, progress, id }: IToDoAtom) => {

    const [toDos, setToDos] = useRecoilState<IToDoAtom[]>(toDoAtom)

    const isProgressEnum = (value: any): value is ProgressEnum => {
        return Object.values(ProgressEnum).includes(value);
    };

    const onClick = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {

        const { currentTarget: { name } } = event;

        try {

            if (isProgressEnum(name)) {

                const newProgress: ProgressEnum = name

                const newTodos = toDos.map((todo) => todo.id === id ? { ...todo, progress: newProgress } : todo)

                setToDos(newTodos);

            }

        } catch (err) {
            throw new Error()

        }


    };

    return (
        <li key={id}>
            {text}
            {progress === ProgressEnum.TODO || <button name={ProgressEnum.TODO} onClick={(event) => onClick(id, event)}>TODO</button>}
            {progress === ProgressEnum.DOING || <button name={ProgressEnum.DOING} onClick={(event) => onClick(id, event)}>DOING</button>}
            {progress === ProgressEnum.DONE || <button name={ProgressEnum.DONE} onClick={(event) => onClick(id, event)}>DONE</button>}
        </li>
    )
};

export default ToDoList;