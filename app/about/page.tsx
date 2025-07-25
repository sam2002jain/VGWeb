"use client";
import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../header';
import Footer from '../footer';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
            The Trust
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
        </div>

        {/* Trust Information */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              Shri Kund-Kund Kahan Digamber Jain Trust
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                The trust, established in July 2000 in delhi, works for religious and social upliftment of the society and spreads the message of Jinvani. Apart from building the gyanteerth complex, the body is also planning to undertake other similar work of religious importance, such as construction of Digambar Jin temples, dharmashalas, libraries and research institutions.
              </p>
              
              <p className="leading-relaxed">
                The trust will also carry out extensive charity activities in the field of education by establishing educational institutions of various levels, from primary schools to universities. The is also engaged in publication of religious scriptures, books, magazines and journals to publicize and spread the messages of Jinvani and Pujya Gurudevshri Kanji Swami. It also conduct activities to instill qualities such as Truth, Non-violence, Non-theft and Celibacy, among today youth.
              </p>

              <p className="leading-relaxed">
                The organisation is also taking up other works of social and human welfare including establishment of hospitals and dispensaries, conducting pilgrimage tours etc. Everyone benefits from the Trusts activities, irrespective of his religion, caste or gender.
              </p>

              <p className="leading-relaxed">
                The trust, working from its head office at Vimalanchal, Hari Nagar, delhi, has renowned Jain scholar Pt. ajit prasad Jain as its Founder and Chief Patron.
              </p>
            </div>
          </div>

          {/* Trust Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Educational Initiatives</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Primary Schools</li>
                <li>Higher Education</li>
                <li>Research Institutions</li>
                <li>Libraries</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Religious Activities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Temple Construction</li>
                <li>Dharmashalas</li>
                <li>Religious Publications</li>
                <li>Pilgrimage Tours</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Social Welfare</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Hospitals</li>
                <li>Dispensaries</li>
                <li>Charity Activities</li>
                <li>Youth Development</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;