export const StoreTask = async(title:any, description:any, responsable_id:any, priority_id:any, workspace_id:any, due_date:any, token:any, baseUrl:any ) => {
console.log(due_date.format('YYYY-MM-DD HH:mm:ss'));
        /*
    const url = `${baseUrl}/tasks`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            responsable_id,
            priority_id,
            workspace_id,
            due_date
        }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json();
    console.log(res);
    */
}