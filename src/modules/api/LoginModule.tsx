import { AUTH_URL_BASE } from '@env';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

export const LoginModule = async({email, password}: any ) => {

    const { login }:any = useContext(AuthContext);

    const response = await fetch(`${AUTH_URL_BASE}/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    console.log(data);
    // await login(data.token);
    // return data; 
}

