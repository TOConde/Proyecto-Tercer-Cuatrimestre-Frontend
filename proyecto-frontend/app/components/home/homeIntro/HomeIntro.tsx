import './HomeIntro.css'
import  LoginButton  from '../loginButton/LoginButton';
import { RegisterButton } from '../registerButton/RegisterButton';
import { WebLogo } from '../../global/webLogo/WebLogo';

export const HomeIntro = () => {
    return (
        <div className="container text-center containerIntro">
            <div className="row filaLogoLogin">
                <div className="col">
                    <WebLogo />
                </div>
                <div className="col">
                    <LoginButton />
                </div>
            </div>
            <div className="row filaBienvenida">
                <div>
                    Películas y series ilimitadas y mucho más<br></br>
                    Disfruta donde quieras. Cancela cuando quieras.<br></br>
                    ¿Quieres ver NextFlix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                </div>
                <div>
                    <RegisterButton />
                </div>
            </div>
        </div>
    );
}