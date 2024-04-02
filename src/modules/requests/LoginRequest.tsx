/**
 ** Function to login request
 * @param email_password - User credentials
 * @returns void
 */
export const LoginRequest = async (email:string, password:string, authUrl:any) => {
  const url = `${authUrl}/login`;
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  });
  console.log(response);
  const res = await response.json();
  console.log(res);
  return {
    'body': res,
    'status': response.status
  };
};