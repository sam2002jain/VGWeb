import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';
import Link from 'next/link';

function AdmissionPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
            Admission Process
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">How to Apply</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To apply for admission to our Mahavidhyalaya, please follow the steps below:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Visit this admission form link.</li>
              <li>Fill out the online application form with accurate details.</li>
              <li>Submit the required documents as specified in the application guidelines.</li>
              <li>Pay the application fee through the provided payment gateway.</li>
              <li>Wait for the confirmation email regarding your application status.</li>
            </ol>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any queries related to admissions, please contact us at:
            </p>
            <p className="text-gray-700"><strong>Email:</strong> admissions@gyanteerth.edu.in</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdmissionPage;
