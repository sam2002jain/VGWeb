"use client";
import React from 'react';
import styles from '../../styles/layout.module.css';
import Header from '../header';
import Footer from '../footer';

function Contact() {
    return (
        <div className="min-h-screen bg-amber-50">
            <Header />
            
            {/* Hero Section with Pattern Background */}
            <div className="relative bg-orange-500 py-20">
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(/contact-pattern.png)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: '0.1'
                    }}
                ></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-center text-white mb-4">
                        CONTACT US
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </div>

            {/* Contact Information Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Address Section */}
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
                        <p className="text-gray-600">Temple Complex</p>
                        <p className="text-gray-600">Aligarh-Agra Marg, Near Hanuman Chowki,</p>
                        <p className="text-gray-600">Post- Sasni 204216</p>
                        <p className="text-gray-600">Distt. Hathras (U.P.) India</p>
                    </div>

                    {/* Contact Number Section */}
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Number</h3>
                        <p className="text-gray-600">+91 9997996346</p>
                        <p className="text-gray-600">+91 9319811708</p>
                    </div>

                    {/* Mail/Website Section */}
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mail/Website</h3>
                        <p className="text-gray-600">info@mangalayatan.com</p>
                        <p className="text-gray-600">www.mangalayatan.com</p>
                    </div>
                </div>

                {/* Contact Form and Map Section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                                    placeholder="Enter you name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                                    placeholder="Your Email Address"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4409049757064!2d77.435837575498!3d28.556520175706346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef004a2c4b9f%3A0xe6620da8c8b4f108!2sShree%20vardhman%20gyan%20teerth%20jain%20temple!5e0!3m2!1sen!2sin!4v1753435423582!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;