/**
File Name : InputField
Description : 입력창 컴포넌트
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27   나경윤   Created
*/

import { useFormContext } from 'react-hook-form'

const InputField = ({ label, name, type, placeholder, autoFocus = false }) => {
    const { register } = useFormContext()

    return (
        <>
            <p className="self-start mb-1 text-sm">{label}</p>
            <input
                {...register(name)}
                name={name}
                type={type}
                autoFocus={autoFocus}
                placeholder={placeholder}
                className="text-sm mb-4 p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </>
    )
}

export default InputField
