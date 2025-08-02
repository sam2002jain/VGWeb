"use client"
import React from 'react';
import styles from '../styles/layout.module.css';

function Footer(){
    return (
        <div>
            <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Amita:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Amita:wght@400;700&family=Bebas+Neue&display=swap');

        .amita-regular {
          font-family: "Amita", serif;
          font-weight: 400;
          font-style: normal;
        }

        .amita-bold {
          font-family: "Amita", serif;
          font-weight: 700;
          font-style: normal;
        }

        .bebas-neue-regular {
          font-family: "Bebas Neue", sans-serif;
          font-weight: 400;
          font-style: normal;
      }
        `}
      </style>
        <section>
            <div className={`${styles.Footer} `}>
                <h2 className="text-4xl font-bold mb-2 text-white amita-bold">वर्धमान ज्ञानतीर्थ</h2>
                 <p className="text-xl md:text-xl text-gray-200 font-bold drop-shadow-md amita-regular mb-4">
            ग्रेटर नोएडा वेस्ट 
          </p>
                <p className="text-lg leading-relaxed text-gray-300 lg:w-1/2 text-center lg:text-left">Vardhman Gyanteerth complex is considered as one of the largest Jain religious centres of its kind in the country. Come with us for this journey.</p>
               </div>
        </section>
        <div className="h-0.5 bg-gradient-to-r from-[#432808] to-[#5c3b13]"></div>
        <footer className={`${styles.Footer2}`}>
            <p className=" text-white">&copy; {new Date().getFullYear()} Vardhman Gyanteerth. All rights reserved.</p>
        </footer>
         </div>
    );
}
export default Footer;
