export const StoreWorkspace = async(name:any, description:any, color:any, token:any, baseUrl:any, user_id:any) => {
    const url = `${baseUrl}/workspaces`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            color,
            user_id,
            rol_id: 1,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.status);
    const res = await response.json();
    return response.status
}