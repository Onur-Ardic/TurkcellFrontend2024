import styles from "./page.module.scss";
import { appWithTranslation } from 'next-i18next';

  
 function Home() {

  

  return (
    <main className={styles.main}>
      <div>
    <p className="fs-1">deneme</p>
      </div>
    </main>
  );
}
export default appWithTranslation(Home)


// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import Head from 'next/head';
// import Link from 'next/link';

// export default function Home({ data }) {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <Head>
// 				{/* Just as before, we use t('message_key') to 
//             translate. */}
//         <title>{t('app_title')}</title>
//       </Head>
//       <div>
//         {/* ... */}
//       </div>
//     </div>
//   );
// }

// export const getServerSideProps = async (context) => {
//   const { locale } = context;
//   const res = await fetch(`http://localhost:3001/${locale}`);
//   const data = await res.json();

//   return {
//     props: {

//       // Spread the returned object into our `props` to expose
//       // them to our component during SSR.
//       ...(await serverSideTranslations(locale, ['common'])),

//       data,
//     },
//   };
// };