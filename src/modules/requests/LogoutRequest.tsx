export const LogoutRequest = async(token: any) => {
    const url = `https://9a3a-2806-2f0-9f00-ffaf-804a-c5a6-4bbf-63f4.ngrok-free.app/api/logout`;
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