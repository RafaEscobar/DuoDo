export const LogoutRequest = async (token: any) => {
    console.log(token);

    const url = `url_base/logout`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response);
    const res = await response.json();
    console.log(res);
}