//make header here 
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const dropdownItems = {
    mahavidhyalaya: ['MA', 'PH.D', 'Admissions', 'Faculty'],
    pathshala: ['Bal pathshala', 'Praud pathshala'],
    shastraBhandaar: ['Books', 'Digital Library', 'Shaudh Patr'],
  };

  return (
    <header className={styles.header}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-white text-2xl font-bold">
          <span className="text-2xl font-bold text-white amita-bold">वर्धमान ज्ञानतीर्थ</span>
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8 text-sm text-white">
          <li>
            <Link href="/about" className="hover:text-yellow-200 transition duration-300">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link href="#" className="hover:text-yellow-200 transition duration-300">
              Mahavidhyalaya
              {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg> */}
            </Link>
            <div className="absolute top-full left-0 bg-white text-gray-800 py-2 rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {dropdownItems.mahavidhyalaya.map((item) => (
                <Link
                  key={item}
                  href={
                  item === 'MA'
                    ? '/mahavidhyalaya/ma'
                    : item === 'PH.D'
                    ? '/mahavidhyalaya/phd'
                    : item === 'Admissions'
                    ? '/mahavidhyalaya/admission'
                    : item === 'Faculty'
                    ? '/mahavidhyalaya/faculty'
                    : '#'
                  }
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-yellow-200 transition duration-300 flex items-center">
              Pathshala
              {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg> */}
            </a>
            <div className="absolute top-full left-0 bg-white text-gray-800 py-2 rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {dropdownItems.pathshala.map((item) => (
                <Link
                  key={item}
                  href={item === 'Bal pathshala' ? '/pathshala/bal' : '/pathshala/praud'}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-yellow-200 transition duration-300 flex items-center">
              Shastra Bhandaar
              {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg> */}
            </a>
            <div className="absolute top-full left-0 bg-white text-gray-800 py-2 rounded-md shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {dropdownItems.shastraBhandaar.map((item) => (
<Link
                  key={item}
                  href={
                  item === 'Books'
                    ? '/Shastra/books'
                    : item === 'Digital Library'
                    ? '/Shastra/elibrary'
                    : item === 'Shaudh Patr'
                    ? '/Shastra/shaudpatr'
                    : '#'
                  }
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </Link>              ))}
            </div>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-200 transition duration-300">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-200 transition duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile side drawer and overlay */}
        <>
          {/* Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-transparent bg-opacity-50 z-[999]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-amber-900 to-amber-800 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto z-[1000]`}>
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-amber-100">Menu</span>
                <button
                  className="text-amber-100 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/about" 
                    className="block text-amber-100 hover:text-white py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>

                {/* Dropdown Items */}
                {Object.entries(dropdownItems).map(([key, items]) => (
                  <li key={key} className="border-b border-amber-700/50">
                    <button
                      onClick={() => toggleMobileDropdown(key)}
                      className="flex items-center justify-between w-full py-2 text-amber-100 hover:text-white transition-colors"
                    >
                      <span className="text-base">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === key ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeMobileDropdown === key ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="py-2 pl-4 space-y-2 bg-amber-800/30 rounded-lg my-2">
                        {items.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="block py-2 px-4 text-amber-200 hover:text-white hover:bg-amber-700/30 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}

                {/* Regular Items */}
                <li>
                  <Link 
                    href="/blog" 
                    className="block text-amber-100 hover:text-white py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block text-amber-100 hover:text-white py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      </nav>
    </header>
  );
}

export default Header;