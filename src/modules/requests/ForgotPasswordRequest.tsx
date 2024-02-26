
export const ForgotPasswordRequest = async(email:string) => {
    const url = `https://9a03-187-235-110-63.ngrok-free.app/api/forgot-password`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const res = await response.json();
    if (response.ok) {
        return res.status;
    } else {
        return res.message;
    }
}