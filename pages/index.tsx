import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Next.js</h1>
      <Link href="/news">about</Link>
      <Link href="/blog">blog</Link>
    </div>
  );
}
