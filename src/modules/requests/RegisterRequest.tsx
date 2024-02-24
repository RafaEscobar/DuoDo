export const RegisterRequest = async (name:any, last_name:any, birthdate:any, email:any, password:any) => {
    try {
        const url = `url_base/register`;
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
    } catch (error) {
        // Hacer algo con los errores
    }
};