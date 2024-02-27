import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const ForgotPasswordRequest = async(email:string) => {
    const { authUrl }:any = useContext(AuthContext);
    const url = `${authUrl}/forgot-password`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const res = await response.json();
    if (response.ok) {
        return res.status;
    } else {
        return res.message;
    }
}