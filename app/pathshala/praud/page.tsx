import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';

const PraudPathshala = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
            Praud Pathshala
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              About Praud Pathshala
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Praud Pathshala is an initiative aimed at providing advanced education in Jain philosophy and practices. Our programs are designed for individuals seeking to deepen their understanding of Jain teachings and their application in modern life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through a combination of lectures, discussions, and practical exercises, we aim to create a supportive environment for learning and personal growth.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PraudPathshala;
