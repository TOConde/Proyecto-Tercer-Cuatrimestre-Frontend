import './Titulo.css'
import { LogOutButton } from '@/app/components/global/logout/LogOut'

export const TituloAdmin = () => {
  return (
    <div className='tituloContainer'>
      <div className='tituloContent'>
        <p className='tituloAdmin text-center'>Completar el siguiente formulario para agregar una nueva Pelicula/serie</p>
        <div className='containerLogOutBttn'>
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}