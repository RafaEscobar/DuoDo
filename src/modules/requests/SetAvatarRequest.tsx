export const SetAvatarRequest = async(token: any, authUrl:any, user_id:any, avatar_id:any) => {
    const url = `${authUrl}/set-avatar`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({user_id, avatar_id}),
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const res = await response.json();
}