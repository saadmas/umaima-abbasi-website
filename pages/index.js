import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Umaima Abbasi</title>
        <meta name="description" content="Professional website of Umaima Abbasi" />
        {/* <link rel="icon" href="/favicon.ico" />/// */}
      </Head>

      <main className={styles.main}>
        FOO
      </main>
    </>
  );
}
