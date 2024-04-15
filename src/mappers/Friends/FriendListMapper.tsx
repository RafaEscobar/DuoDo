export const FriendListMapper = (data:any) => {
    return data.map((item:any) => {
        return {
            name: item.name,
            id: item.external_identifier,
            avatar: item.avatars[0].url
        }
    });
}