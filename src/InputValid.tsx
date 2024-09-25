import { spawn } from "child_process";
import React, { useState } from "react"
import { useForm } from "react-hook-form";


// const Todo = () => {

//     const [value, setValue] = useState<string>("")

//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//     };

//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = event.currentTarget.value;

//         setValue(value)

//         console.log(value)
//     }

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={value} type="text" placeholder="name" />
//                 <button type="button">login</button>
//             </form>
//         </div>
//     )
// };


const InputValid = () => {

    // useForm은 form 작성을 훨씬 더 간결하게 만들어주고 validation 작업 또한 쉽게 제공한다.
    // register 함수 안에는 form 속성에 필요한 것들을 가지고 있다. value, on 이벤트 등..
    // watch 함수는 사용자가 form의 입력값의 변화를 관찰 할 수 있게 해준다.
    // handleSubmit 함수는 실질적으로 validation을 담당한다. validation을 마친후 유효하다고 판단되면 코드를 실행한다.
    // 그리고 html에서 해주던 조건부도 html의 보호를 벗어나서 register안에서 선언해주고 자바스크립트로 validation을 한다.
    // handleSubmit 함수는 2개의 인자를 받는데 첫번째는 onValid, 두번째는 onInvalid 이다.
    // formState 에러를 표시해주는 함수


    // 이메일 검증 코드 ^[A-Za-z0-9._%+-]+@naver.com$


    /*
    {
  name: 'todo',  입력된 값의 키값이 된다. {'todo' : '입력된값'}
  onChange: ..., // 입력 필드의 값이 변경될 때 호출
  onBlur: ...,   // 입력 필드가 포커스를 잃을 때 유효성 검사후 잘못된 값이 입력되었으면 에러를 던진다.
  ref: ...       // 해당 입력 필드의 DOM 참조
}
     */


    interface FormType {
        email: string
        name: string
        password: string
        password1: string
    }
    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormType>()

    const onValid = (data: FormType) => {

        if (data.password !== data.password1) {

            setError('password1', { message: "패스워드가 다릅니다." }, { shouldFocus: true })
        };
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                {/* required를  선언한 email을 빈값으로 보내면 자동으로 email 입력창인 focus된다.

                */}
                <input {...register("email", {
                    required: '이메일을 입력해주세요', pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "옳바른 이메일 형식이 아닙니다."

                    }
                })} placeholder="email" />
                {errors.email && <span>{errors.email.message}</span>}
                <input {...register("name", {
                    required: '이름을 입력해주세요',
                    validate: {
                        fuck: (value) => value.includes('fuck') && value.includes('fuck') ? "fuck can not use" : true
                    }
                })} placeholder="name" />
                {errors.name && <span>{errors.name.message}</span>}
                <input {...register("password", {
                    required: '패스워드를 입력해주세요',
                    minLength: {
                        value: 5,
                        message: "패스워드는 최소5글자 이상이어야 합니다"
                    }
                })} placeholder="password" />
                {errors.password && <span>{errors.password.message}</span>}
                <input {...register("password1", {
                    required: '패스워드를 입력해주세요', minLength: {
                        value: 5,
                        message: "패스워드는 최소5글자 이상이어야 합니다"
                    }
                })} placeholder="password" />
                {errors.password1 && <span>{errors.password1.message}</span>}
                <button>login</button>
            </form>
        </div>
    )
};





export default InputValid;