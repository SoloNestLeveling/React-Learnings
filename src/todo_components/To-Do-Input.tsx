import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDoAtom, toDoAtom, toDoProgress } from "./atoms";


interface IForm {
    toDo: string
};

const ToDoInput = () => {

    const progress = useRecoilValue(toDoProgress)

    const { register, handleSubmit, setValue } = useForm<IForm>()

    const setToDo = useSetRecoilState<IToDoAtom[]>(toDoAtom)

    const onVaild = ({ toDo }: IForm) => {

        setValue("toDo", "");
        setToDo((prev) => [...prev, { id: Date.now(), text: toDo, progress, }]);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onVaild)}>
                <input {...register("toDo")} />
            </form>
        </div>
    )
};

export default ToDoInput