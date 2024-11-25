import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sandwichtelurkeju() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Resep Sandwich Telur Keju</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      body {\n        font-family: 'Roboto', sans-serif;\n      }\n    ",
        }}
      />
      <header className="flex items-center justify-between p-4 border-b">
        {/* Centered Logo */}
        <div className="text-lg font-bold mx-auto">Healthy Life</div>

        {/* Desktop Navigation (Navbar centered) */}
        <nav className="hidden md:flex space-x-4 mx-auto">
          <Link className="text-green-600" to="/">Home</Link>
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              id="dropdownButton"
              className="text-gray-600 font-semibold flex items-center"
              onClick={toggleDropdown}
            >
              Fitur <i className="fas fa-chevron-down ml-1" />
            </button>
            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div
                id="dropdownMenu"
                className="absolute bg-white shadow-lg rounded-lg w-20 mt-2 z-8"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Pelacak Jam Tidur
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Pelacak Langkah
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Resep Makanan
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Catatan Sehat
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Aktivitas Fisik
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                >
                  Monitor Kesehatan
                </a>
              </div>
            )}
          </div>
          <a href="#">Artikel</a>
          <a href="#">Pusat Bantuan</a>
        </nav>

        {/* Hamburger Icon (Positioned to the right on mobile) */}
        <div className="text-2xl md:hidden ml-auto" onClick={toggleMobileMenu}>
          <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"}`} />
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center">
            <Link
              className="px-4 py-2 text-gray-600"
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={toggleDropdown}
              className="text-gray-600 flex items-center w-full text-left px-4 py-2"
            >
              Fitur <i className="fas fa-chevron-down ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col w-full bg-white shadow-lg">
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pelacak Jam Tidur
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pelacak Langkah
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resep Makanan
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Catatan Sehat
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Aktivitas Fisik
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-800 hover:bg-white hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Monitor Kesehatan
                </a>
              </div>
            )}
            <a
              className="px-4 py-2 text-gray-600"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Artikel
            </a>
            <a
              className="px-4 py-2 text-gray-600"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pusat Bantuan
            </a>
          </div>
        </div>
      )}

      <main className="p-8 mx-auto max-w-4xl space-y-8">
        <div className="flex items-center mb-8">
          <Link
            to="/sarapan" // Linking back to Sarpan page
            className="text-2xl text-green-600"
          >
            <i className="fas fa-arrow-left" />
          </Link>
          <h1 className="text-3xl font-bold ml-4">Resep Sandwich Telur Keju</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              alt="Sandwich telur keju"
              className="w-3/4 h-auto rounded-lg shadow-lg"
              src="https://storage.googleapis.com/a1aa/image/nEcNjvYSr95JJV8nIyfuxavNgAulXy9Ui9qHf4Pp389W6PyTA.jpg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Bahan-bahan</h2>
            <ul className="list-inside space-y-2">
              <li>4 lembar roti tawar</li>
              <li>2 butir telur</li>
              <li>4 buah tomat (iris tipis)</li>
              <li>1 buah timun</li>
              <li>100 gram selada</li>
              <li>50 ml mayones</li>
              <li>100 ml margarin</li>
              <li>50 gram keju cheddar</li>
              <li>1 sdt garam</li>
              <li>1 sdt lada</li>
              <li>1 sdt oregano</li>
              <li>1 sdt basil</li>
              <li>1 sdt parsley</li>
              <li>1 sdt thyme</li>
              <li>1 sdt rosemary</li>
              <li>1 sdt paprika bubuk</li>
              <li>1 sdt cabai bubuk</li>
              <li>1 sdt ketumbar bubuk</li>
              <li>1 sdt jinten bubuk</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mb-2">Cara Membuat</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Roti tawar dipanggang atau dibakar hingga kekuningan.</li>
              <li>Telur digoreng dan diberi bumbu garam dan merica.</li>
              <li>Letakkan selada, tomat, mentimun di atas roti tawar yang sudah dipanggang.</li>
              <li>Tambahkan telur goreng di atasnya.</li>
              <li>Tambahkan mayones, keju cheddar parut, dan taburan bumbu rempah seperti oregano, basil, dan parsley.</li>
              <li>Tutup sandwich dengan roti tawar lainnya, sajikan hangat.</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sandwichtelurkeju;
