import Link from 'next/link'
import {useState} from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '../auth/auth'

export default function Login() {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const router = useRouter()

    const handleLogin = () => {
        auth.login(user)
        router.push('/')
    }

    return(
        <div className='column'>
            <label>
                Username: {' '}
                <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <label>
                Password: {' '}
                <input type='password' />
            </label>
            <button className='button' onClick={handleLogin}>Login</button>
        </div>
    )
}