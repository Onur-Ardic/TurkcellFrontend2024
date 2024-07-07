import Image from "next/image";
import styles from "./page.module.css";

import i18next from '../i18n';

export default function Home() {
  return (
    <main className={styles.main}>
    <div>
   {i18next.t('defaultText')}

    </div>
    </main>
  );
}
