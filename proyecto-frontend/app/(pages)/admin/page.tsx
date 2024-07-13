'use client'
import styles from './page.module.css';
import { withRoles } from '@/app/components/HOC/WithRoles'
import { FormAdmin } from '@/app/components/admin/form/FormAdmin'
import { GenerarReporte } from '@/app/components/admin/generarReporte/GenerarReporte';
import TablaPelicula, { Pelicula } from '@/app/components/admin/tablaPelicula/TablaPelicula';
import { TituloAdmin } from '@/app/components/admin/titulo/Titulo'
import { getAllMovies, getGenerosById } from '@/app/services/Peliculas';
import { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const Page = () => {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

    const actualizarPeliculas = async () => {
        try {
            const allMovies = await getAllMovies();

            const peliculasConGeneros = await Promise.all(
                allMovies.map(async (pelicula: { peliculaID: number; }) => {
                    const generos = await getGenerosById(pelicula.peliculaID);
                    return { ...pelicula, generos: generos.map((g: { nombreGenero: string }) => g.nombreGenero) };
                })
            );
            setPeliculas(peliculasConGeneros);
        } catch (error) {
            console.log('Error al buscar peliculas:', error);
        }
    }

    useEffect(() => {
        actualizarPeliculas();
    }, [])

    return (
        <div className={styles.main}>
            <TituloAdmin />
            <Tabs className={styles.tabAdm} defaultActiveKey="infoPeliculas" id="uncontrolled-tab-example">
                <Tab eventKey="infoPeliculas" title="Agregar/Modificar peliculas">
                    <FormAdmin actualizarPeliculas={actualizarPeliculas} />
                    <TablaPelicula peliculas={peliculas} actualizarPeliculas={actualizarPeliculas} />
                </Tab>
                <Tab eventKey="Reporte" title="Reporte">
                    <GenerarReporte />
                </Tab>
            </Tabs>
        </div>
    )
}

export default withRoles(Page, ['ADM'], '/')