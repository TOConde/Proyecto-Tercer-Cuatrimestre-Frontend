'use client'

import { withRoles } from '@/app/components/HOC/WithRoles'
import { FormAdmin } from '@/app/components/admin/form/FormAdmin'

const Page = () => {
    return (
        <div>
            <div>Bienvenido a la Administraciao</div>
            <FormAdmin />
        </div>
    )
}

export default withRoles(Page, ['ADM'], '/')