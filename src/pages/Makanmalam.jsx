import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Makanmalam() {
  const navigate = useNavigate();  // Mendapatkan fungsi navigate
  
  const handleBackClick = () => {
    navigate("/");  // Arahkan kembali ke halaman Home
  };

  const handleSupClick = () => {
    navigate("/supkrimwortel");  // Arahkan ke halaman Sup Krim Wortel
  };

  const handleKatsuClick = () => {
    navigate("/chickenkatsu");  // Arahkan ke halaman Chicken Katsu
  };

  const handleBihunClick = () => {
    navigate("/bihunkuah");  // Arahkan ke halaman Bihun Kuah
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
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      body {\n        font-family: 'Roboto', sans-serif;\n      }\n      .dropdown-content {\n        display: none;\n      }\n      .dropdown:hover .dropdown-content {\n        display: block;\n      }\n    "
        }}
      />
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-lg font-bold">Healthy Life</div>
          <nav className="flex space-x-6">
            <a className="text-green-700" href="#" onClick={handleBackClick}>
              Home
            </a>
            {/* Dropdown Fitur */}
            <div className="relative dropdown">
              <a className="text-gray-700" href="#">
                Fitur <i className="fas fa-chevron-down" />
              </a>
              <div className="dropdown-content absolute bg-white shadow-lg rounded-lg w-40 mt-2 z-10">
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
            </div>
            <a className="text-gray-700" href="#">
              Artikel
            </a>
            <a className="text-gray-700" href="#">
              Pusat Bantuan
            </a>
          </nav>
          <div className="text-gray-700">
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-6 px-6">
        <div className="flex items-center mb-6">
          {/* Button Back mengarah ke halaman Home */}
          <button
            className="text-green-700 text-2xl"
            onClick={handleBackClick}  // Menggunakan handleBackClick
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="text-2xl font-bold text-green-700 ml-4">
            Rekomendasi Makan Malam
          </h1>
        </div>
        <div className="space-y-6">
          {/* Sup Krim Wortel */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img
              alt="A bowl of carrot cream soup"
              className="w-24 h-24 rounded-lg mr-4"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/lBFE43B4Xq4aO9IsqcI5oY0HVeTuVSBdbCGlXHARcWoiWU5JA.jpg"
              width={100}
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">Sup krim wortel</h2>
              <p className="text-gray-700 mt-2">
                wortel brastagi 2 buah dipotong-potong | Sup krim kemasan merek
                royco atau bebas | Air secukupnya sekitar 300 ml | Masukkan air
                kedalam panci, dan tuangkan sup krim kemasan lalu aduk hingga
                tercampur rata dengan air. siapkan panci terpisah untuk merebus
                wortel yang sudah di potong - potong kecil. setelah sudah matang
                bisa langsung tiriskan....
              </p>
              <button
                onClick={handleSupClick}  // Menggunakan handleSupClick
                className="bg-green-700 text-white px-4 py-2 rounded mt-4 inline-block"
              >
                Klik Disini
              </button>
            </div>
            <button className="text-gray-700 text-2xl ml-4">
              <i className="fas fa-plus-circle" />
            </button>
          </div>
          {/* Chicken Katsu */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img
              alt="A plate of chicken katsu"
              className="w-24 h-24 rounded-lg mr-4"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/FQDzgdlUGe0fQEsVYditnDOWC0Wjr7niB5KNfcykwFzJaRlnA.jpg"
              width={100}
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">Chicken katsu</h2>
              <p className="text-gray-700 mt-2">
                150 gram tepung roti/panir (disarankan pakai yg warna orange ya agar
                cantik). Tapi pake merk Kobe juga boleh | 2 sdt bubuk kari | 2 sdt
                bubuk paprika | 2 sdt bubuk lada hitam | Bahan Utama | 2 kg dada
                ayam | 60 gram putih telur | 7-8 sdt kaldu jamur 4 sdt lada hitam
                peach | 4 sdt paprika bubuk...
              </p>
              <button
                onClick={handleKatsuClick}  // Menggunakan handleKatsuClick
                className="bg-green-700 text-white px-4 py-2 rounded mt-4 inline-block"
              >
                Klik Disini
              </button>
            </div>
            <button className="text-gray-700 text-2xl ml-4">
              <i className="fas fa-plus-circle" />
            </button>
          </div>
          {/* Bihun Kuah */}
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img
              alt="A bowl of bihun kuah"
              className="w-24 h-24 rounded-lg mr-4"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/ep8z3zxxzo3dGqr54mRaKw8blnBdeeqaK8CBBRHjrhLGaRlnA.jpg"
              width={100}
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-green-700">Bihun kuah</h2>
              <p className="text-gray-700 mt-2">
                1 Bungkus bihun | 2 ons jamur/ optional bisa diganti jamur atau
                sayur lain | 2 butir telur | 2 buah sosis | 3 siung bawang putih |
                Sejumput merica | Garam dan penyedap. Haluskan bawang putih dan
                merica...
              </p>
              <button
                onClick={handleBihunClick}  // Menggunakan handleBihunClick
                className="bg-green-700 text-white px-4 py-2 rounded mt-4 inline-block"
              >
                Klik Disini
              </button>
            </div>
            <button className="text-gray-700 text-2xl ml-4">
              <i className="fas fa-plus-circle" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Makanmalam;