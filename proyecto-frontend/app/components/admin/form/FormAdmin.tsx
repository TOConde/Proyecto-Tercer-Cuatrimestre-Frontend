import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './FormAdmin.css'
import { useState } from 'react';
import { agregarPelicula } from '@/app/services/AgregarPelicula';

export const FormAdmin = () => {
  const [titulo, setTitulo] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [img, setImg] = useState<File | null>(null);
  const [fileName, setFileName] = useState('Formato .jpg/.jpeg/.png');

  const handleChangeTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };

  const handleChangeSinopsis = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSinopsis(e.target.value);
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
      setFileName(e.target.files[0].name)
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!img) {
      console.log('Imagen sin seleccionar');
      return;
    }

    const pelicula = new FormData();
    pelicula.append('titulo', titulo);
    pelicula.append('sinopsis', sinopsis);
    pelicula.append('img', img);

    const agregadoExitoso = await agregarPelicula(pelicula);
    if (agregadoExitoso) {
      setTitulo('');
      setSinopsis('');
      setFileName('Formato .jpg/.jpeg/.png');
      console.log('Película cargada con éxito.');
    } else {
      console.log('Error al cargar la película.');
    }
  }

  return (
    <form className='containerFormAdm' onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Titulo pelicula" className="formAdmLabel">
        <Form.Control type="text" placeholder="Titulo pelicula" className="containerFormInput" value={titulo} onChange={handleChangeTitulo} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSinopsis" label="Sinopsis" className="formAdmLabel">
        <Form.Control type="text" placeholder="Sinopsis" className="containerFormInput" value={sinopsis} onChange={handleChangeSinopsis} />
      </FloatingLabel>
      <div className="formAdmLabel">
        <label htmlFor="file" className="fileInputLabel">Seleccionar imagen...</label>
        <input type="file" id="file" className="fileInput" onChange={handleChangeImg} />
        {fileName && <span className="fileName">{fileName}</span>}
      </div>
      <Button type="submit" className='bttnAgregar'>Agregar</Button>
    </form>
  );
};