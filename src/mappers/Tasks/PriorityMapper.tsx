export const PriorityMapper = (data:any) => {
    return data.map((item:any) => {
        return {
            key: item.id,
            value: item.priority
        }
    });
}