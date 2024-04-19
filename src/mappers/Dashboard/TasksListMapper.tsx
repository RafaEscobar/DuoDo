export const TasksListMapper = (data:[]) => {
    return data.map((task:any) => {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            due_date: task.due_date
        }
    });
}