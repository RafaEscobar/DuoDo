export const WorkspaceMapper = (data:any) => {
    return data.map((item:any) => {
        return {
            key: item.id,
            value: item.name
        }
    });
}