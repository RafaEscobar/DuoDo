import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/**
 ** Function to login request
 * @param email_password - User credentials
 * @returns void
 */
export const LoginRequest = async (email:string, password:string) => {
  const { authUrl }:any = useContext(AuthContext);
  const url = `${authUrl}/login`;

  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  });
  if (response.ok) {
    console.log('Inicio de sesión valido');
  } else{
    throw new Error('Error al iniciar sesión');
  }
  const res = await response.json();
  return res;
};