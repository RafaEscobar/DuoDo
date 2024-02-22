import { BASE_URL_AUTH } from '@env';

export const LoginModule = async ({ email, password }:any) => {
    const url = `https://7741-2806-2f0-9f00-ffaf-3d98-5033-4c39-b426.ngrok-free.app/api/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    const res = await response.json();
    return res.token;
};