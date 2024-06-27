import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from '../src/pages/SignUp'
import './App.css'

function App() {
    const router = createBrowserRouter([
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
