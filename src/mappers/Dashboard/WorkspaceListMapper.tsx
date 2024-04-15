export const WorkspaceListMapper = (data:[]) => {
    return data.map((workspace:any) => {
        return {
            id: workspace.id,
            name: workspace.name,
            description: workspace.description,
            color: workspace.color,
            advance: workspace.advance,
            tasks: workspace.tasks
        }
    });
}