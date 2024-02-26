export const RegisterRequest = async (name:any, last_name:any, email:any, password:any, birthdate:any) => {
    console.log(name, last_name, email, password, birthdate);
    try {
        const url = `${process.env.AUTH_URL}/register`;
        const params = {
            name,
            last_name,
            email,
            password,
            birthdate,
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params),
        });
        console.log(response);
        const res = await response.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};