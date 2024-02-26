export const LogoutRequest = async(token: any) => {
    const url = `https://9a03-187-235-110-63.ngrok-free.app/api/logout`;
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