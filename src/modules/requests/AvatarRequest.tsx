export const AvatarRequest = async(token:any, baseUrl:any) => {
    const url = `${baseUrl}/avatars`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const res = await response.json();
    return res.data;
}