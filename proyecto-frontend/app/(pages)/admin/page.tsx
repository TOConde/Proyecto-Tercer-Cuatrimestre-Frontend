'use client'
import styles from './page.module.css';
import { withRoles } from '@/app/components/HOC/WithRoles'
import { FormAdmin } from '@/app/components/admin/form/FormAdmin'
import TablaPelicula, { Pelicula } from '@/app/components/admin/tablaPelicula/TablaPelicula';
import { TituloAdmin } from '@/app/components/admin/titulo/Titulo'
import { getAllMovies } from '@/app/services/Peliculas';
import { useEffect, useState } from 'react';

const Page = () => {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

    const actualizarPeliculas = async () => {
        try {
            const allMovies = await getAllMovies();
            setPeliculas(allMovies);
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
            <FormAdmin actualizarPeliculas={actualizarPeliculas} />
            <TablaPelicula peliculas={peliculas} actualizarPeliculas={actualizarPeliculas} /> 
        </div>
    )
}

export default withRoles(Page, ['ADM'], '/')