import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate, Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { selectCurrentUserToken } from '../../store/auth/authSlice';

type Props = {
    redirectTo: string
}

export const ProtectedRoute = ({ redirectTo }: PropsWithChildren<Props>) => {
    const token = useAppSelector(selectCurrentUserToken)

    return token == null ? <Navigate to={redirectTo}/> : <Outlet/>
}
