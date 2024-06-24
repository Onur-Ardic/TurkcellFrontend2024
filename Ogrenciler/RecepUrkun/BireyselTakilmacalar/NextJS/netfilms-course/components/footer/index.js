import Link from "next/link"
import styles from "./styles.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Made with 3 by &nbsp;
            <Link href="#" target="_blank">
                Recep Ürkün
            </Link>
        </footer>
    )
}

export default Footer