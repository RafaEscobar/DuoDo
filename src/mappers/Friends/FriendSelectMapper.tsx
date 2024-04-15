export const FriendSelectMapper = (data:any) => {
    return data.map((item:any) => {
        return {
            key: item.external_identifier,
            value: item.name
        }
    });
}