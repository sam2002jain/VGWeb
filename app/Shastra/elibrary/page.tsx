import React from 'react';
import styles from '../../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';

const ELibraryPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Digital Library</h1>
        <p className={styles.description}>Explore our collection of digital resources.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ELibraryPage;
