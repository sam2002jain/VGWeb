import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';

const BalPathshala = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
            Bal Pathshala
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              About Bal Pathshala
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bal Pathshala is an initiative aimed at providing children with a strong foundation in Jain values and teachings. Through engaging activities and lessons, we aim to instill the principles of non-violence, truth, and compassion in young minds.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our curriculum includes stories from Jain scriptures, interactive discussions, and practical exercises that encourage children to embody the teachings of Lord Mahavira in their daily lives.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BalPathshala;