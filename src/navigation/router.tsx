import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { WithHeader } from '../layouts/WithHeader';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { User } from '../pages/User';

const routes: RouteObject[] = [
    {
        path: '/auth',
        children: [
            {
                path: 'signup',
                element: <Signup/>,
            },
            {
                path: 'login',
                element: <Login/>,
            },
        ],
    },
    {
        path: '/',
        element: <WithHeader/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/user',
                element: <ProtectedRoute redirectTo={'/'}/>,
                children: [
                    {
                        path: ':id',
                        element: <User/>,
                    },
                ],
            },
            {
                path: '*',
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
]

export const router = createBrowserRouter(routes, {
    future: {
        // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
        v7_normalizeFormMethod: true,
    },
})
