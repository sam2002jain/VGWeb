import React from 'react';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Header from './header';

function App() {
  return (
    <div className="min-h-screen bg-amber-100 font-sans text-white">
       <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Amita:wght@400;700&display=swap');

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
        `}
      </style>
      <Header/>

      <section
        className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center bg-cover bg-center bg-white"
        style={{
          backgroundImage: `url(/VT_BG.png)`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 80px)',
          display: 'flex',
          paddingLeft: 100,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 top-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-2xl lg:text-7xl font-extrabold leading-tight mb-4 text-yellow-200 drop-shadow-lg">
            श्री वर्धमान ज्ञानतीर्थ
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-bold drop-shadow-md">
            ग्रेटर नोएडा वेस्ट 
          </p>
        </div>
      </section>
       <section className="py-12 bg-amber-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-4">Temple Complex</h2>
          <div className="w-26 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src="/BM_CP.JPG"
                  alt="Bhagwan Mahaveer Temple"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">Bhagwan Mahaveer&apos;s Temple</h3>
                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                  Mangalayatan features Bhagwan Mahaveer as the main deity, the Moolnayak. The temple is constructed on no iron Architecture.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                src="/MV_CP.jpg"
                  alt="DwadShang swadhyay Bhawan"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">DwadShang swadhyay Bhawan</h3>
                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                  Shri Adinath Kund-Kund Kahan Digamber Jain Trust has enshrined &apos;Teerthankar Mahavir&apos; as &apos;Vidhinayak&apos; in the complex.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src="/MV_CP.JPG"
                  alt="Bhagwan Mahaveer Temple"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">Mahavidhyalaya</h3>
                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                  Bhagwan Bahubali Temple, covering an area of around 4000 sq. feet, is also an attraction of Mangalayatan complex.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src="/VL_CP.JPG"
                  alt="Bhagwan Mahaveer Temple"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">Vardhman Library</h3>

                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                  The Vardhman Library at gyanteerth is a hub of knowledge and resources for the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className={`${styles.section3} py-12 bg-brown-800 text-white`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div> {/* Underline */}

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {/* Gallery Item 1 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://placehold.co/600x400/8B4513/FFFFFF?text=Gallery+Image+1"
                alt="Gallery Image 1"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://placehold.co/600x400/A0522D/FFFFFF?text=Gallery+Image+2"
                alt="Gallery Image 2"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://placehold.co/600x400/CD853F/FFFFFF?text=Gallery+Image+3"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://placehold.co/600x400/D2B48C/333333?text=Gallery+Image+4"
                alt="Gallery Image 4"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
