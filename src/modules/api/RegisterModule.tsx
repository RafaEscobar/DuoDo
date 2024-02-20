import { BASE_URL_AUTH } from '@env';

export const RegisterModule = async ({ name, last_name, birthdate, email, password }:any) => {
    try {
        const url = `${BASE_URL_AUTH}/register`;
        const params = {
            name,
            last_name,
            birthdate,
            email,
            password,
        } 
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...params }),
        });      
        const res = await response.json();
        console.log(res); 
    } catch (error) {
        console.log(error);
    }
};