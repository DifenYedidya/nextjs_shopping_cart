import Head from 'next/head'
import Link from 'next/link'
import styles from '../header/Header.module.css'

export default function Header() {
    return(
        <>
            <Head>
                <title>NextJs Shopping Cart</title>
                <meta name="description" content="next shopping cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.header}>
                <Link href="/" replace>Home</Link>
                <Link href="/storelist/storelist" replace>Store</Link>
                <Link href="/cart/cart" replace>Shopping Cart</Link>
                <Link href="/login/login" replace>Logout</Link>
            </div>
        </>
    )
}

