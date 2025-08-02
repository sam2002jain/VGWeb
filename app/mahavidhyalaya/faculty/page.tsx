import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../../header';
import Footer from '../../footer';
import Link from 'next/link';

function facultypage(){
    return (
        <div className="min-h-screen bg-amber-50">
        <Header />
        <main className="py-16">
            <div className="container mx-auto px-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-6">
                Faculty
            </h1>
            <div className="w-24 h-1 bg-amber-800 mx-auto mb-12"></div>
            </div>
    
            <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-2xl font-semibold text-amber-800 mb-6">Meet Our Faculty</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                Our faculty members are dedicated to providing quality education and fostering a love for learning. They are experts in their fields and are committed to the holistic development of our students.
                </p>
                <ul className="list-disc list-inside space-y-4 text-amber-700">
                <li>Experienced educators with advanced degrees</li>
                <li>Passionate about teaching and mentoring students</li>
                <li>Involved in research and community service</li>
                </ul>
            </div>
    
            {/* Faculty Members List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Example Faculty Member */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Dr. John Doe</h3>
                <p className="text-gray-600 mb-2">Associate Professor of Jain Studies</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. John has over 15 years of experience in teaching Jain philosophy and ethics. He is passionate about integrating traditional teachings with modern educational practices.
                </p>
                <Link href="/faculty/john-doe" className="text-blue-500 hover:underline">View Profile</Link>
                </div>
    
                {/* Add more faculty members as needed */}
            </div>
            </div>
        </main>
        <Footer />
    </div>
    );
}
export default facultypage;