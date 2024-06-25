'use client'
import styles from './page.module.css';
import { withRoles } from '@/app/components/HOC/WithRoles'
import { FormAdmin } from '@/app/components/admin/form/FormAdmin'
import TablaPelicula from '@/app/components/admin/tablaPelicula/TablaPelicula';
import { TituloAdmin } from '@/app/components/admin/titulo/Titulo'

const Page = () => {
    return (
        <div className={styles.main}>
            <TituloAdmin />        
            <FormAdmin />
            <TablaPelicula />
        </div>
    )
}

export default withRoles(Page, ['ADM'], '/')