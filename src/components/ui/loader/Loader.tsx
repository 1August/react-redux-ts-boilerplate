import styles from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.dotLoader}></div>
            <div className={styles.dotLoader}></div>
        </div>
    )
}
