import { Header }from "../../components/index";
import styles from '../layout/Layout.module.css'

export default function Layout({children}) {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}