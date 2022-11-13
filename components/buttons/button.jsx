import styles from '../buttons/Button.module.css'

export default function LongButton({text}) {
    return(
        <>
            <button className={styles.longButton}>{text}</button>
        </>
    )
}