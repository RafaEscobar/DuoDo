export const IndexFriends = async(user:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/friends/?user=${user}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const res = await response.json();
    return {
        body: res,
        status: response.status
    }
}