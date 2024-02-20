import { BASE_URL_AUTH } from '@env';


export const LogoutModule = async (token: any) => {
    console.log(token);

    const url = `${BASE_URL_AUTH}/logout`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response);
    const res = await response.json();
    console.log(res);
}