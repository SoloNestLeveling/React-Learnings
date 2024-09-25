import React, { useEffect } from "react"
import { useForm } from "react-hook-form";



interface EmailType {
    emailPrefix: string
    emailDomain: string
    selectOption: string
}


function Email() {


    const { register, handleSubmit, watch, setValue } = useForm<EmailType>({
        defaultValues: {
            selectOption: "",

        }
    })

    const onValid = (data: EmailType) => {

        const userEmail = `${data.emailPrefix}@${data.emailDomain}`;
        console.log(userEmail);

    }

    const selectedValue = watch('selectOption')


    const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue('emailDomain', event.currentTarget.value)

    }

    // useEffect(() => {
    //     if (selectedValue !== '직접입력') {
    //         setValue('emailDomain', selectedValue);
    //     } else {
    //         setValue('emailDomain', '');
    //     }
    // }), [selectedValue, setValue]

    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>

                <input {...register('emailPrefix', { required: '이메일을 입력해주세요' })} />
                <span>@</span>
                <input  {...register('emailDomain', { required: '도메인을 선택해주세요', })}
                    value={selectedValue !== '직접입력' ? selectedValue : ""}
                    onChange={onchange}
                    disabled={selectedValue === '직접입력'}
                />
                <select {...register('selectOption')}>
                    <option value="">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="kokoa.com">kokoa.com</option>
                </select>
                <button>제출</button>
            </form>

        </div>
    );
};

export default Email