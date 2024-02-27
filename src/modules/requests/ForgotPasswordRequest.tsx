
export const ForgotPasswordRequest = async(email:string) => {
    console.log(process.env.AUTH_URL);
    const url = `${process.env.AUTH_URL}/forgot-password`;
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