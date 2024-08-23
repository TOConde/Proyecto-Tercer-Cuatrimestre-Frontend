import './Titulo.css';
import { LogOutButton } from '@/app/components/global/logout/LogOut';
import { BrowseButton } from '@/app/components/global/browseButton/BrowseButton'

export const TituloAdmin = () => {
  return (
    <div className='tituloContainer'>
      <div className='tituloContent'>
        <p className='tituloAdmin text-center'>Completar el siguiente formulario para agregar una nueva Película/Serie</p>
        <div className='containerLogOutBttn'>
          <BrowseButton />
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}