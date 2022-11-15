import { Header }from "../../components/index";
import { AuthProvider } from "../../pages/auth/auth";
import styles from '../layout/Layout.module.css'

export default function Layout({children}) {
    return(
        <AuthProvider>
            <Header/>
            <div className={styles.container}>
                <main>
                    {children}
                </main>
            </div>
        </AuthProvider>
    )
}