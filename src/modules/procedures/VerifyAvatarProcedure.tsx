export const VerifyAvatarProcedure = (user:any, setAvatar:any) => {
    if (user.avatar.length > 0) {
        console.log("Si hay avatar");
        setAvatar(true);
    } else {
        setAvatar(false);
        console.log("NOOOOO hay avatar");
    }
}