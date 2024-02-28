export const ForgotPasswordRequest = async(email:string, authUrl:any) => {
    const url = `${authUrl}/forgot-password`;

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