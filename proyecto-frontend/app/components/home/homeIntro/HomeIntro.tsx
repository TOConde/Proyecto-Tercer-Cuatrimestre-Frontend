import './HomeIntro.css'
import LoginButton from '../loginButton/LoginButton';
import RegisterButton  from '../registerButton/RegisterButton';
import { WebLogo } from '../../global/webLogo/WebLogo';

export const HomeIntro = () => {
    return (
        <div className="container text-center containerIntro">
            <div className="containerTop">
                <WebLogo />
            </div>
            <div className="containerTextBttn">
                <div className='containerIntroText'>
                    <p>Películas y series ilimitadas y mucho más</p>
                    <p>Disfruta donde quieras. Cancela cuando quieras.</p>
                    <p>¿Quieres ver Flixorama ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Flixorama.</p>
                </div>
                <div className='containerBttn'>
                    <div className='containerBttnLogin'>
                        <LoginButton />
                    </div>
                    <div>
                        <RegisterButton />
                    </div>
                </div>
            </div>
        </div>
    );
}