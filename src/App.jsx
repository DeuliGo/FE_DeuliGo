import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from '../src/pages/SignUp'
import Main from '../src/pages/Main'
import './App.css'
import ErrorPage from './pages/ErrorPage'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <ErrorPage />
        },
        {
            path: '/signup',
            element: <SignUp />
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
