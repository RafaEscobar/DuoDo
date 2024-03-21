export const IndexPriorities = async(token:any, baseUrl:any) => {
    const url = `${baseUrl}/priorities`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const res = await response.json();
    return res.data;
}