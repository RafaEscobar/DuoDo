export const LoginModule = async ({ email, password }:any) => {
    const url = `https://c533-187-235-143-15.ngrok-free.app/api/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      console.log('Se regsitro correctamente')
    } else{
      throw new Error('Error al iniciar sesión');
    }
    const res = await response.json();
    return res.token;
};