/**
File Name : validationSchema
Description : 입력값 유효성 검사 스키마
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

import * as yup from 'yup'
import { REGEX } from './regex'

export const registerSchema = yup.object().shape({
    name: yup.string().required('이름을 입력해주세요.'),
    nickname: yup.string().required('닉네임을 입력해주세요.'),
    email: yup.string().required('이메일을 입력해주세요.').matches(REGEX.email, '유효한 이메일 주소를 입력해주세요.'),
    password: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .matches(REGEX.password, '8~16자의 대/소문자, 숫자, 특수문자를 사용해 주세요.'),
    passwordCheck: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
})
