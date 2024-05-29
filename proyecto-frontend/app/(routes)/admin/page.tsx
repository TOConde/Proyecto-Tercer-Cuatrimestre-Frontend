'use client'

import { withRoles } from '@/app/components/HOC/WithRoles'

const Page = () => {
    return (
        <div>
            <div>Bienvenido a la Administraciao</div>
            <div>Aca va un lindo form para cargar pelis</div>
        </div>
    )
}

export default withRoles(Page,['ADM'], '/')