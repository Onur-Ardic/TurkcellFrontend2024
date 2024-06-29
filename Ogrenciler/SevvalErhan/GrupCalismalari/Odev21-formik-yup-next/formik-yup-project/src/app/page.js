import styles from "./page.module.css";
import StajForm from "./StajForm";

export default function Home() {
  return (
    <main className={styles.main}>
     <StajForm/>
    </main>
  );
}
