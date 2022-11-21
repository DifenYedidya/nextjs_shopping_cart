import Head from 'next/head'
import Link from 'next/link'
import styles from '../header/Header.module.css'
import { useAuth } from '../../pages/auth/auth.jsx'
import RequiredAuth from '../requiredAuth/requiredAuth'

export default function Header() {

    const auth = useAuth()

    return(
        <>
            <Head>
                <title>NextJs Shopping Cart</title>
                <meta name="description" content="next shopping cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.header}>
                <Link href="/" replace>Home</Link>
                    {/* <RequiredAuth> */}
                <Link href="/storelist/storelist" replace>Store</Link>
                    {/* </RequiredAuth> */}
                {!auth.user && (
                    <Link href="/login/login" replace>
                        Login
                    </Link>
                )}
            </div>
        </>
    )
}

