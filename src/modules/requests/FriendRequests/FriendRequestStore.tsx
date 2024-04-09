export const FriendRequestStore = async(origin_user_id:any, target_user_id:any, baseUrl:any, token:any) => {
    const url = `${baseUrl}/friend-request`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ origin_user_id, target_user_id }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const res = await response.json();
    return {
        body: res,
        status: response.status
    }
}