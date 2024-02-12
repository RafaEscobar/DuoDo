import { AUTH_URL_BASE } from '@env';

export const LoginModule = async ({ email, password }:any) => {
    const url = `${AUTH_URL_BASE}/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const res = await response.json();
    console.log(res.token);
    return res.token;
};