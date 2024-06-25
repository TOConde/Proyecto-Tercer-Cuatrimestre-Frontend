import './FormAdmin.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { agregarPelicula, getAllGeneros } from '@/app/services/AgregarPelicula';

export const FormAdmin = () => {
  const [titulo, setTitulo] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [duracion, setDuracion] = useState('');
  const [estreno, setEstreno] = useState('');
  const [video, setVideo] = useState('');

  const [generos, setGeneros] = useState([]);
  const [selectedGeneros, setSelectedGeneros] = useState<number[]>([]);

  const [img, setImg] = useState<File | null>(null);
  const [fileName, setFileName] = useState('Formato .jpg/.jpeg/.png');
  
  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const allGeneros = await getAllGeneros();
        setGeneros(allGeneros);
      } catch (error) {
        console.error('Error fetching generos:', error);
      }
    };

    fetchGeneros();
  }, []);

  const handleChangeTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };

  const handleChangeSinopsis = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSinopsis(e.target.value);
  };

  const handleChangeDuracion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuracion(e.target.value);
  };

  const handleChangeEstreno = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstreno(e.target.value);
  };

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideo(e.target.value);
  };

  const handleSelectGenero = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.options);
    const selected: number[] = [];
    options.forEach(option => {
      if (option.selected) {
        selected.push(Number(option.value));
      }
    });
    setSelectedGeneros(selected);
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
    pelicula.append('duracion', duracion);
    pelicula.append('fechaEstreno', estreno);
    pelicula.append('urlVideo', video);
    pelicula.append('generos', JSON.stringify(selectedGeneros));
    pelicula.append('img', img);
    

    const agregadoExitoso = await agregarPelicula(pelicula);
    if (agregadoExitoso) {
      setTitulo('');
      setSinopsis('');
      setDuracion('');
      setEstreno('');
      setVideo('');
      setSelectedGeneros([]);
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
      <FloatingLabel controlId="floatingDuracion" label="Duracion" className="formAdmLabel">
        <Form.Control type="text" placeholder="Duración" className="containerFormInput" value={duracion} onChange={handleChangeDuracion} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEstreno" label="Estreno" className="formAdmLabel">
        <Form.Control type="date" placeholder="Fecha de estreno" className="containerFormInput" value={estreno} onChange={handleChangeEstreno} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVideoURL" label="Video URL" className="formAdmLabel">
        <Form.Control type="text" placeholder="Video URL" className="containerFormInput" value={video} onChange={handleChangeVideo} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingGeneros" label="Géneros" className="formAdmLabel">
          <Form.Select multiple className="containerFormInput containerGenero" onChange={handleSelectGenero}>
            {generos.map((genero: any) => (
              <option key={genero.generoID} value={genero.generoID}>{genero.nombreGenero}</option>
            ))}
          </Form.Select>
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