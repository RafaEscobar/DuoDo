export const StoreWorkspace = async(name:any, description:any, color:any, token:any, baseUrl:any, user_id:any) => {
    const url = `${baseUrl}/workspaces`;
    console.log();
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            color,
            user_id,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response.status
}