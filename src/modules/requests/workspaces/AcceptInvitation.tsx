export const AcceptInvitation = async(workspace_id:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/collaboration-request/${workspace_id}`;
    const response = await fetch(url, {
        method: 'PATCH',
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