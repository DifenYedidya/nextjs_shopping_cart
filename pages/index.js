import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Shopping Cart</title>
        <meta name="description" content="next shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/shoppingCart">Shopping Cart</Link>
        <div>Logout</div>
      </div>
      <div className={styles.main}>
        <div>
          Name: 
          {/* <a>{{name}}</a> */}
        </div>
        <div>
          Email: 
          {/* <a>{{Email}}</a> */}
        </div>
        <div>
          Phone number: 
          {/* <a>{{phoneNumber}}</a> */}
        </div>
        <div>
          Address: 
          {/* <a>{{address}}</a> */}
        </div>
        
        <button className='button'>Fill out your identity</button>
      </div>
    </div>
  )
}
