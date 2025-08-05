import React from 'react';
import styles from '../../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';

const ShaudPatrPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Shaud Patr</h1>
        <p className={styles.description}>Explore our collection of Shaud Patr resources.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ShaudPatrPage;
