import Head from 'next/head';

import Welcome from '../components/Welcome/Welcome';
import Timeline from '../components/Timeline/Timeline';
import NavBar from '../components/NavBar/NavBar';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Umaima Abbasi</title>
        <meta name="description" content="Professional website of Umaima Abbasi" />
        {/* <link rel="icon" href="/favicon.ico" />/// */}
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Spectral&&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Welcome />
        <Timeline />
      </main>
    </>
  );
}
