import styles from '../styles/Home.module.css'
import { useAuth } from './auth/auth'
import { useRouter } from 'next/router'

export default function Home() {
  const auth = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    auth.logout()
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          Name: {auth.user}
        </div>
        <button className='button logoutButton' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
