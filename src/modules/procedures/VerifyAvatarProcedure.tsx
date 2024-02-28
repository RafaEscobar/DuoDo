export const VerifyAvatarProcedure = (user:any, setAvatar:any, type:string) => {
    const currentUser = (type == 'login') ? user : JSON.parse(user);
    if (currentUser.avatar.length > 0) {
        setAvatar(true);
    } else {
        setAvatar(false);
    }
}