'use client'

import { withRoles } from '@/app/components/HOC/WithRoles'
import { FormAdmin } from '@/app/components/admin/form/FormAdmin'
import { TituloAdmin } from '@/app/components/admin/titulo/Titulo'

const Page = () => {
    return (
        <div>
            <TituloAdmin />        
            <FormAdmin />
        </div>
    )
}

export default withRoles(Page, ['ADM'], '/')