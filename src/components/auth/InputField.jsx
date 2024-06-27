/**
File Name : InputField
Description : 입력창 컴포넌트
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

import { useFormContext } from 'react-hook-form'

const InputField = ({ label, name, type, placeholder, autoFocus = false }) => {
    const {
        register,
        formState: { errors }
    } = useFormContext()

    return (
        <>
            <div className="flex flex-row justify-between items-center mb-1">
                <p className="self-start text-sm">{label}</p>
                {errors[name] && (
                    <p className="text-red-500 text-sm">{errors[name].message}</p> // 에러 메시지 표시
                )}
            </div>
            <input
                {...register(name)}
                name={name}
                type={type}
                autoFocus={autoFocus}
                placeholder={placeholder}
                className="text-sm mb-4 p-2 px-3 h-11 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </>
    )
}

export default InputField
