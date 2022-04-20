import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

console.log(styles);
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Long Phụng</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleWrapper}>
          <img src="/danhrang.png" alt="" id="danhrang" />
          <h1>Long Phụng</h1>
          <div className={styles.imageWrapper}>
            <img src="/dragon.png" alt="ok-porcupine" id="dragon-phoenix" />
          </div>
        </div>
      </main>
    </div>
  );
}
