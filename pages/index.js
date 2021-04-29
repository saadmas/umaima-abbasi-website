import Head from 'next/head';
import Welcome from '../components/Welcome/Welcome';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Umaima Abbasi</title>
        <meta name="description" content="Professional website of Umaima Abbasi" />
        {/* <link rel="icon" href="/favicon.ico" />/// */}
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <Welcome />
      </main>
    </>
  );
}
