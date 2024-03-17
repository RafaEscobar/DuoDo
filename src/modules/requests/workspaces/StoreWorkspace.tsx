export const StoreWorkspace = async(name:any, description:any, color:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/workspaces`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            color,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response.status
}