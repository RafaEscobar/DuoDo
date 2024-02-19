import { BASE_URL_AUTH } from '@env';

export const LoginModule = async ({ email, password }:any) => {
    const url = `${BASE_URL_AUTH}/login`;
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