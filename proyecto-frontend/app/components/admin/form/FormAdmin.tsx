import './FormAdmin.css'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { agregarPelicula, getAllGeneros } from '@/app/services/Peliculas';

export const FormAdmin = ({ actualizarPeliculas }: { actualizarPeliculas: () => void }) => {
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

  const handleSelectGenero = (generoID: number) => {
    setSelectedGeneros((prev) =>
      prev.includes(generoID) ? prev.filter(id => id !== generoID) : [...prev, generoID]
    );
  }; //

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
      actualizarPeliculas();
    } else {
      console.log('Error al cargar la película.');
    }
  }

  return (
    <form className='containerFormAdm' onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput" label="Título película" className="formAdmLabel">
        <Form.Control type="text" placeholder="Título película" className="containerFormInput" value={titulo} onChange={handleChangeTitulo} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSinopsis" label="Sinopsis" className="formAdmLabel">
        <Form.Control type="text" placeholder="Sinopsis" className="containerFormInput" value={sinopsis} onChange={handleChangeSinopsis} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDuracion" label="Duración" className="formAdmLabel">
        <Form.Control type="text" placeholder="Duración" className="containerFormInput" value={duracion} onChange={handleChangeDuracion} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEstreno" label="Estreno" className="formAdmLabel">
        <Form.Control type="date" placeholder="Fecha de estreno" className="containerFormInput" value={estreno} onChange={handleChangeEstreno} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVideoURL" label="Enlace al Video" className="formAdmLabel">
        <Form.Control type="text" placeholder="Enlace al Video" className="containerFormInput" value={video} onChange={handleChangeVideo} />
      </FloatingLabel>
      <Form.Group controlId="formGeneros" className='formAdmLabel'>
        <Form.Label>Géneros</Form.Label>
        <Row>
          {generos.map((genero: any) => (
            <Col key={genero.generoID} xs={6}>
              <Form.Check
                type="checkbox"
                id={`genero-${genero.generoID}`}
                label={genero.nombreGenero}
                onChange={() => handleSelectGenero(genero.generoID)}
                checked={selectedGeneros.includes(genero.generoID)}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>
      <div className="formAdmLabel">
        <label htmlFor="file" className="fileInputLabel">Seleccionar imagen...</label>
        <input type="file" id="file" className="fileInput" onChange={handleChangeImg} />
        {fileName && <span className="fileName">{fileName}</span>}
      </div>
      <Button type="submit" className='bttnAgregar'>Agregar</Button>
    </form>
  );
};