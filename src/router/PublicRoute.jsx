import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children }) {
    const { logged } = useContext(AuthContext);

    return logged ? <Navigate to='/' /> : children;
}
