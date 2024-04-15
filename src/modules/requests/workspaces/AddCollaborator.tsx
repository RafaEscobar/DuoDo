export const AddCollaborator = async(user:any, collaborator:any, workspace_id:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/collaboration-request`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            user,
            collaborator,
            workspace_id
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    let res = await response.json();
    return {
        'body': res,
        'status': response.status
    };
}