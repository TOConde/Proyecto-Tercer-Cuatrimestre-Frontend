import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './FormAdmin.css'
import { useState } from 'react';
import { agregarPelicula } from '@/app/services/AgregarPelicula';

export const FormAdmin = () => {

  const [titulo, setTitulo] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [img, setImg] = useState<File | null>(null);

  const handleChangeTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };

  const handleChangeSinopsis = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSinopsis(e.target.value);
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
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
      <FloatingLabel controlId="floatingThumbnail" label="Thumbnail" className="formAdmLabel">
        <Form.Control type="file" placeholder="Thumbnail" className="containerFormInput" onChange={handleChangeImg} />
      </FloatingLabel>
      <Button type="submit" className='bttnAgregar'>Agregar</Button>
    </form>
  );
};