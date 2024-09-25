import { useRecoilState, useRecoilValue } from "recoil";
import { HoursSelector, MinAtom } from "./todo_components/atoms";

function Min() {

    const [min, setMin] = useRecoilState(MinAtom);

    // 여기서 hours는 get함수를 실행하고, setHours는 set함수를 실행한다. 
    const [hours, setHours] = useRecoilState(HoursSelector)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { currentTarget: { value } } = event;

        setMin(Number(value))  // input의 벨류는 전부 스트링이다. number 타입으로 바꿔줘야한다.

    };

    const onChangeHours = (event: React.ChangeEvent<HTMLInputElement>) => {

        setHours(Number(event.currentTarget.value));

    }

    return (
        <form>
            <input onChange={onChange} value={min === 0 ? "" : min} type="number" placeholder="minutes" />
            <input onChange={onChangeHours} value={hours === 0 ? "" : hours} type="number" placeholder="hours" />
        </form>
    )

};


export default Min;