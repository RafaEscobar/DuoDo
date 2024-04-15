export const CollaboratorsList = (data:any) => {
    return data.map((item:any) => {
        return {
            name: `${item.name} ${item.last_name}`,
            email: item.email,
            id: item.external_identifier,
            avatar: item.avatars[0].url
        }
    });
}