export const AcceptFriendRequest = async(friend_request_id:any, token:any, baseUrl:any) => {
    const url = `${baseUrl}/friend-request/${friend_request_id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    let res = await response.json();
    return {
        'body': res,
        'status': response.status
    };
}