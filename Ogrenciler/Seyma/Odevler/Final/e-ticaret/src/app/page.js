import i18next from 'i18next';
import Navbar from "@/components/Navbar";
//import { Background } from './Styled';

export default function Home() {
  return (
    <main >
      <div className='background'>
      <p>{i18next.t('defaultText')}</p>
      <header> <Navbar></Navbar></header>
      </div>
    </main>
  );
}
