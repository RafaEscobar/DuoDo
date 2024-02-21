import { RegisterModule } from "../api/RegisterModule";

export const handleRegister = async (name: any, last_name: any, birthdate: any, email: any, password: any, navigate:any) => {
    try {
        await RegisterModule({
            name,
            last_name,
            birthdate,
            email,
            password
        });
        navigate('Login');
    } catch (error) {
        console.log('Error: ', error);
    }
}