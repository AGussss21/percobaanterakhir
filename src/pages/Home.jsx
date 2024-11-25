import React, { useState } from "react";
import { Link } from "react-router-dom";  // Ensure react-router-dom is installed
import './home.css';  // Import custom CSS

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Healthy Life</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-bold">Healthy Life</div>
          <nav className="flex space-x-6 relative items-center hidden md:flex">
            <Link className="text-green-600" to="/">Home</Link>
            <div className="relative">
              <button
                id="dropdownButton"
                className="text-gray-600 flex items-center"
                onClick={toggleDropdown}
              >
                Fitur
                <i className="fas fa-chevron-down ml-1" />
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdownMenu"
                  className="absolute bg-white shadow-lg rounded-lg w-48 mt-2 z-10"
                >
                  <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Pelacak Jam Tidur
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Pelacak Langkah
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Resep Makanan
                  </Link>
                  <Link to="catatankesehatan.html" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Catatan Sehat
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Aktivitas Fisik
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">
                    Monitor Kesehatan
                  </Link>
                </div>
              )}
            </div>
            <Link className="text-gray-600" to="#">Artikel</Link>
            <Link className="text-gray-600" to="#">Pusat Bantuan</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="text-gray-600 md:hidden">
            <button onClick={toggleMobileMenu} className="p-2">
              <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white shadow-md md:hidden block">
            <div className="flex flex-col items-center">
              <Link className="px-4 py-2 text-gray-600" to="/" onClick={toggleMobileMenu}>Home</Link>
              <button
                onClick={toggleDropdown}
                className="text-gray-600 flex items-center w-full text-left px-4 py-2"
              >
                Fitur <i className="fas fa-chevron-down ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="flex flex-col w-full bg-white shadow-lg">
                  <Link to="#" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Pelacak Jam Tidur</Link>
                  <Link to="#" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Pelacak Langkah</Link>
                  <Link to="#" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Resep Makanan</Link>
                  <Link to="catatankesehatan.html" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Catatan Sehat</Link>
                  <Link to="#" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Aktivitas Fisik</Link>
                  <Link to="#" className="px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600">Monitor Kesehatan</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-start mb-4">
          <button className="text-green-600 text-2xl">
            <i className="fas fa-arrow-left" />
          </button>
        </div>
        <h1 className="text-center text-3xl font-bold text-green-700 mb-8">
          Resep Makanan Sehat
        </h1>

        {/* Cards arranged horizontally */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Sarapan Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all w-full sm:w-1/2 lg:w-1/3">
            <img
              alt="Delicious sandwich served on a wooden board"
              className="w-full rounded-lg shadow-md mb-4"
              height={200} // Corrected height here
              src="https://storage.googleapis.com/a1aa/image/AtiTDXgoT4YFIFFLSCJpkeimbv5a2hv877YNt6BzW28y5H5JA.jpg"
              width={300}
            />
            <Link
              to="/sarapan"  // Navigate to Sarapan page
              className="bg-green-700 text-white py-2 px-4 rounded-full inline-block w-full text-center"
            >
              Sarapan
            </Link>
          </div>
          {/* Makan Siang Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all w-full sm:w-1/2 lg:w-1/3">
            <img
              alt="Fried chicken served on a plate"
              className="w-full rounded-lg shadow-md mb-4"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/ieiqRwgqQhSJNSueNcAPvJiXhFA84xlNEbG4fTAtSkGHnfIPB.jpg"
              width={300}
            />
            <Link
              to="/makansiang"
              className="bg-green-700 text-white py-2 px-4 rounded-full block w-full text-center"
            >
              Makan Siang
            </Link>
          </div>
          {/* Makan Malam Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all w-full sm:w-1/2 lg:w-1/3">
            <img
              alt="Dinner table with various dishes"
              className="w-full rounded-lg shadow-md mb-4"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/G2QE5vY9ZFaxK9g0iyrzINTePRffRsW2Dw0FtFsv0gYDnfIPB.jpg"
              width={300}
            />
            <Link
              to="/makanmalam"
              className="bg-green-700 text-white py-2 px-4 rounded-full block w-full text-center"
            >
              Makan Malam
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 Healthy Life. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
