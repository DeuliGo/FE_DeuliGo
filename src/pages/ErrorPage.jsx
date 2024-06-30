/**
File Name : ErrorPage
Description : 에러 화면
Author : 임도헌

History
Date        Author   Status    Description
2024.06.30  임도헌    Created
*/

import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    let title = ''
    let message = ''

    if (error.status === 500) {
        title = 500
        message = JSON.parse(error.data).message
    } else if (error.status === 404) {
        title = '404'
        message = '요청하신 페이지를 찾을수 없습니다.'
    }

    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-8xl font-black text-gray-200">{title}</h1>

                <p className="mt-4 text-xl text-gray-500">{message}</p>

                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-amber-400 px-5 py-3 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    )
}
export default ErrorPage
