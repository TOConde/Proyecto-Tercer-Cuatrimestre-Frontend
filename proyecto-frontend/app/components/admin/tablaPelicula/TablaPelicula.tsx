import { useEffect, useState } from 'react';
import './TablaPelicula.css';
import { Table } from 'react-bootstrap';
import clienteAxios from '@/app/services/Axios';

interface Pelicula {
  peliculaID: number;
  titulo: string;
  sinopsis: string;
  fechaEstreno: string;
  duracion: number;
}


const TablaPelicula: React.FC = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

  useEffect(() => {
    const buscarPeliculas = async () => {
      try {
        const res = await clienteAxios.get('/peliculas/all');
        setPeliculas(res.data);
      } catch (error) {
        console.log('Error al buscar peliculas:', error);
      }
    }

    buscarPeliculas();
  }, [])

  return (
    <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Sinopsis</th>
            <th>Fecha de Estreno</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula) => 
            <tr key={pelicula.peliculaID}>
              <td>{pelicula.titulo}</td>
              <td>{pelicula.sinopsis}</td>
              <td>{pelicula.fechaEstreno}</td>
              <td>{pelicula.duracion}</td>
            </tr>
          )}
        </tbody>
    </Table>
  )
}

export default TablaPelicula;