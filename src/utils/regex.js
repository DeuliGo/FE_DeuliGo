/**
File Name : regex
Description : 정규 표현식
Author : 나경윤

History
Date        Author   Status    Description
2024.06.27  나경윤    Created
*/

export const REGEX = {
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,16}$/
}
