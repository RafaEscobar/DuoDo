export const UpdateTask = async(
        title:any,
        description:any,
        responsable_id:any,
        workspace_id:any,
        priority_id:any,
        status:any,
        due_date:any,
        token:any,
        baseUrl:any,
        task_id:any
    ) => {
    const url = `${baseUrl}/tasks/${task_id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            title,
            description,
            responsable_id,
            workspace_id,
            priority_id,
            status,
            due_date,
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