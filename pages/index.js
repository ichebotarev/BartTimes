import Head from 'next/head';
import Image from 'next/image';
import Stations from '../components/Stations';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bart In Minutes</title>
				<meta name="description" content="Gateway to Train Times" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Stations />
			</main>
		</div>
	);
}
