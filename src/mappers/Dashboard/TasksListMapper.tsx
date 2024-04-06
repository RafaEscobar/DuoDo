export const TasksListMapper = (data:[]) => {
    let newData:any = [];
    data.forEach((workspace:any) => {
        let tasks = workspace.tasks.map((task:any) => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
                status: task.status,
                due_date: task.due_date
            }
        });
        tasks.forEach((task:any) => {
            newData.push(task)
        });
    });
    return newData;
}