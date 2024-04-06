export const IndexTasks = async(user:string, token:string, baseUrl:string) => {
    const url = `${baseUrl}/tasks/?user=${user}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    const res = await response.json();
    return {
        body: res,
        status: response.status
    };
}