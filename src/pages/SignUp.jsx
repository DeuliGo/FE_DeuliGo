/**
File Name : SignUp
Description : 회원가입 화면
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27   나경윤   Created
*/

import { useForm, FormProvider } from 'react-hook-form'
import SignUpForm from '../components/auth/SignUpForm'

const SignUp = () => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col justify-center h-full">
                <p className="mb-12 text-3xl">회원가입</p>
                <SignUpForm />
            </div>
        </FormProvider>
    )
}

export default SignUp
