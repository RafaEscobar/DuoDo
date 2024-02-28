export const VerifyAvatarProcedure = (user:any, setAvatar:any, type:string) => {
    const currentUser = (type == 'login') ? user : JSON.parse(user);
    if (currentUser.avatar.length > 0) {
        console.log("Si hay avatar");
        setAvatar(true);
    } else {
        setAvatar(false);
        console.log("NOOOOO hay avatar");
    }
}