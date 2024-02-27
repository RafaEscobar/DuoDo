export const LogoutRequest = async(token: any) => {
    console.log(process.env.AUTH_URL);
    const url = `${process.env.AUTH_URL}/logout`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const res = await response.json();
        if (res.status == 'ok') {
            return res.status;
        }
    } catch (error) {
        console.log(error);
    }
}