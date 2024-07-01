import InternshipForm from "./components/InternshipForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Staj Başvuru Formu</h1>
      <InternshipForm />
    </main>
  );
}
