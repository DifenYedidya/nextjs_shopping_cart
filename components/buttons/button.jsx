import styles from '../buttons/Button.module.css'

export default function LongButton({text, toSomewhere}) {
    return(
        <>
            <button onClick={toSomewhere} className={styles.longButton}>{text}</button>
        </>
    )
}