export const IndexCollaborators = async(workspace_id:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/user-workspace/?workspace_id=${workspace_id}`;
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