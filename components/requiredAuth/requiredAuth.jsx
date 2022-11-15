import { useAuth } from '../../pages/auth/auth'
import { Router } from 'next/router'

const RequiredAuth = ({ children }) => {
    const auth = useAuth()

    if(!auth.user){
        return <Router to='/login/login' />
    }

    return children
}

export default RequiredAuth