import styles from "./styles.module.css"

const Skeleton = ({ width, height }) => {
    return <div className={styles.skeleton} styles={{ width, height }}></div>
}

export default Skeleton