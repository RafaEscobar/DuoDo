export const IndexWorkspace = async(user:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/workspaces/?user=${user}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await response.json();
    return res;
}