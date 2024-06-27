/**
File Name : SignUpForm
Description : 회원가입 폼
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

import { useFormContext } from 'react-hook-form'
import InputField from './InputField'

const SignUpForm = () => {
    const { handleSubmit } = useFormContext()
    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
            <InputField label="이름" name="name" type="text" placeholder="이름" autoFocus />
            <InputField label="닉네임" name="nickname" type="text" placeholder="닉네임" />
            <InputField label="이메일" name="email" type="text" placeholder="이메일" />
            <InputField label="비밀번호" name="password" type="password" placeholder="비밀번호" />
            <InputField label="비밀번호 확인" name="passwordCheck" type="password" placeholder="비밀번호 확인" />
            <button type="submit" className="text-lg text-white bg-amber-400 mt-6 font-semibold">
                회원가입
            </button>
        </form>
    )
}

export default SignUpForm
