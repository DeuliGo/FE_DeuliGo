/**
File Name : SignUp
Description : 회원가입 화면
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../utils/validationSchema'
import SignUpForm from '../components/auth/SignUpForm'
import SocialGoogle from '../components/auth/SocialGoogle'
import SocialKakao from '../components/auth/SocialKakao'

const SignUp = () => {
    const methods = useForm({
        resolver: yupResolver(registerSchema)
    })

    return (
        <>
            <div className="flex flex-col justify-center h-full">
                <p className="mb-9 text-3xl font-semibold">회원가입</p>
                <FormProvider {...methods}>
                    <SignUpForm />
                </FormProvider>
                <SocialGoogle />
                <SocialKakao />
                <button className="bg-transparent text-slate-400 mt-5 self-center w-fit">로그인하러 가기</button>
            </div>
        </>
    )
}

export default SignUp
