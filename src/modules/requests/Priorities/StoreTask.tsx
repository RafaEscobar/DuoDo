export const StoreTask = async(title:any, description:any, responsable:any, priority_id:any, workspace_id:any, due_date:any, token:any, baseUrl:any ) => {
    const url = `${baseUrl}/tasks`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            responsable,
            priority_id,
            workspace_id,
            due_date
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    const res = await response.json();
    return {
        'body': res,
        'status': response.status
    };
}