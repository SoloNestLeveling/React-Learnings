import { atom, selector } from "recoil";


export enum ProgressEnum {
    "TODO" = "TODO",
    "DOING" = "DOING",
    "DONE" = "DONE",
};

export interface IToDoAtom {
    id: number
    text: string
    progress: ProgressEnum
};


export const toDoAtom = atom<IToDoAtom[]>({
    key: "toDo",
    default: []
});

export const toDoProgress = atom({
    key: "progress",
    default: ProgressEnum.TODO
})


// atom에서 파생된 값을 변형시킬수있다.
export const toDoSelector = selector({
    key: "toDos",
    get: ({ get }) => {
        const todoList = get(toDoAtom);  //get함수를 이용하면 selector내부의 여러 atom들을 가져올 수 있다.
        const progress = get(toDoProgress)
        return todoList.filter((todo) => todo.progress === progress);
    }
});






export const MinAtom = atom({
    key: "minutes",
    default: 0
});



export const HoursSelector = selector<number>({
    key: "hoursSerlector",
    get: ({ get }) => {

        const minutes = get(MinAtom)
        return Math.floor(minutes / 60)
    },
    set: ({ set }, newValue) => {
        // set 함수는 2개의 인자를 받는데 첫번쨔 인자는 변경하고 싶은 atom, 2두번째 인자는 변경한 새로운 atom 

        const minutes = (Number(newValue) * 60);

        set(MinAtom, minutes)  // 첫번째 인자: 변경하려고 하는 MinAtom , 두번째 인자: 변경한 값

    }
})

interface IDrops {
    [key: string]: string[]
}

export const Drops = atom<IDrops>({
    key: "drops",
    default: {
        toDo: ['a', 'b'],
        doing: ['c', 'd', 'e'],
        done: ['f']
    }
});

