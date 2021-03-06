import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="robbis made me do this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />
      {/* Results */}
    </div>
  );
}
