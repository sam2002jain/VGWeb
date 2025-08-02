import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';
import Link from 'next/link';

function PhdPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
            Ph.D. Program
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              Doctor of Philosophy (Ph.D.)
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6">
              The Ph.D. program at Vardhman Gyanteerth is designed to foster advanced research in Jain studies, philosophy, and related fields. Our program encourages critical thinking, scholarly inquiry, and the pursuit of knowledge that contributes to the understanding of Jain traditions and their relevance in contemporary society.
            </p>
            <Link href="/phd/admissions" className="text-blue-600 hover:underline">Learn more about admissions</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PhdPage;