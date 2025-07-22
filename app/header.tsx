//make header here 
import React from 'react';
import styles from '../styles/layout.module.css';

function Header(){
    return (
         <header className={styles.header}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-white amita-bold">वर्धमान ज्ञानतीर्थ</span>
          </div>

          <ul className="hidden md:flex space-x-8 text-sm text-white">
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Mahavidhyalaya
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Pathshala
              </a>
            </li>
            
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Shastra Bhandaar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Contact
              </a>
            </li>
          </ul>

        </nav>
      </header>
    )
    

}
export default Header;