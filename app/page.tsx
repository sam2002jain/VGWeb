"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Header from './header';
import Footer from './footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc:string) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };



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

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
        src="/homeBG.jpg"
        alt="Vardhman Gyanteerth Background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="flex flex-col items-center justify-center h-full w-full text-center mt-145">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg bebas-neue-regular">
        Vardhman Gyanteerth<br/>
          </h1>
          <h6 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white drop-shadow-lg bebas-neue-regular">
        Greater Noida
          </h6>
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
                  src="/bmCP.jpg"
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
                src="/mvCP.jpg"
                  alt="DwadShang swadhyay Bhawan"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">श्री वर्धमान ज्ञानतीर्थ पाठशाला</h3>
                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                  Shri Adinath Kund-Kund Kahan Digamber Jain Trust has enshrined &apos;Teerthankar Mahavir&apos; as &apos;Vidhinayak&apos; in the complex.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src="/hostelBG.JPG"
                  alt="Mahavidhyalaya"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center amita-regular">महाविद्यालय</h3>
                <div className="w-16 h-1 bg-amber-800 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-sm">
                 जैनदर्शन एवं प्राकृत जैसे विषयों का गहराई से अध्ययन व शोध करने हेतु महाविद्यालय की स्थापना की गई है।
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src="/vlCP.jpg"
                  alt="Vardhman Library"
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
              <div className="relative w-full h-64">
                <Image
                  src="/vlCP.jpg"
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openModal('/vlCP.jpg')}
                  className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64">
                <Image
                  src="/mvCP.jpg"
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openModal('/mvCP.jpg')}
                  className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64">
                <Image
                  src="/hostelBG.jpg"
                  alt="Gallery Image 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openModal('/hostelBG.jpg')}
                  className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <div className="relative w-full h-64">
                <Image
                  src="/bmCP.jpg"
                  alt="Gallery Image 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openModal('/bmCP.jpg')}
                  className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300"
                >
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

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div className="relative max-w-4xl max-h-full overflow-auto rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={currentImage}
                alt="Full View"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}

        <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">Welcome to Vardhman Gyanteerth</h2>
            <p className="text-lg mb-4 leading-relaxed">
              The Community who firmly believes in God word.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Vardhman Gyanteerth complex is considered as one of the largest Jain
              religious centres of its kind in the country. Come with us for research and exploration.
            </p>
            <p className="text-lg leading-relaxed">
              It is the auspiciousness of Tirthankar Lord Mahavir, infinit Teerthankara, five
              supereme beings, Lord manscript, Pulya Gurudev his follower Champaben and
              with the help of great personalities that the built Vardhman Gyanteerth is a
              meditatory land of the followers of truth. This place is not personalized but it
              belongs to everyone to everyone. Vardhman Gyanteerth is ending preaches of
              omniscience to every person.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-full">
              <div className="relative w-full h-64">
                <Image
                  src="/user-avatar.png"
                  alt="Shri Ajit Prasad Jain"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center bg-amber-100">
                <p className="text-xl font-semibold text-gray-700">Shri Ajit Prasad Jain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
