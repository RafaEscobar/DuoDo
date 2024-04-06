export const TasksListMapper = (data:[]) => {
    let newData:any = [];
    data.forEach((workspace:any) => {
        newData.push(
            workspace.tasks.map((task:any) => {
                return {
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    due_date: task.due_date
                }
            })[0]
        );
    });
    return newData;
}