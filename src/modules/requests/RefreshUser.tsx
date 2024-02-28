export const RefreshUser = async(token:any, baseUrl:any) => {
    const url = `${baseUrl}/refresh-user`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const res = await response.json();
    return res;
}