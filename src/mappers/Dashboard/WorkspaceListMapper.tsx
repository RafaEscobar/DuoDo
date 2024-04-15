export const WorkspaceListMapper = (data:[]) => {
    return data.map((workspace:any) => {
        return {
            title: workspace.name,
            description: workspace.description,
            color: workspace.color,
            advance: workspace.advance
        }
    });
}