import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Makansiang() {
  const navigate = useNavigate();  // Mendapatkan fungsi navigate

  const handleBackClick = () => {
    navigate("/");  // Arahkan kembali ke halaman Home
  };

  const handleClickTumisBrokoli = () => {
    navigate("/tumisbrokoli");  // Arahkan ke halaman Tumis Brokoli
  };

  const handleClickAyamTeriyaki = () => {
    navigate("/ayamteriyaki");  // Arahkan ke halaman Ayam Teriyaki
  };

  const handleClickAyamGoreng = () => {
    navigate("/ayamgoreng");  // Arahkan ke halaman Ayam Goreng
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
            "\n      body {\n        font-family: 'Roboto', sans-serif;\n      }\n    "
        }}
      />
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-lg font-bold">Healthy Life</div>
          <nav className="flex space-x-6 relative items-center">
            <a className="text-green-600" href="#">
              Home
            </a>
            {/* Fitur with Dropdown */}
            <div className="relative">
              <button
                id="dropdownButton"
                className="text-gray-600 font-semibold flex items-center"
              >
                Fitur <i className="fas fa-chevron-down ml-1" />
              </button>
              {/* Dropdown Menu */}
              <div
                id="dropdownMenu"
                className="absolute hidden bg-white shadow-lg rounded-lg w-40 mt-2 z-10"
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
            </div>
            <a className="text-gray-600" href="#">
              Artikel
            </a>
            <a className="text-gray-600" href="#">
              Pusat Bantuan
            </a>
          </nav>
          <div className="text-gray-600">
            <i className="fas fa-bars" />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-6 px-6">
        <div className="flex items-center mb-4">
          <button
            className="text-green-600 text-2xl"
            onClick={handleBackClick}  // Menggunakan handleBackClick
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="text-3xl font-bold text-green-700 ml-4">
            Rekomendasi Makan Siang
          </h1>
        </div>
        <div className="space-y-6">
          {/* Tumis Brokoli Ayam */}
          <div className="bg-white shadow-md rounded-lg p-4 border-2 border-blue-500">
            <div className="flex">
              <img
                alt="A dish of broccoli and chicken"
                className="w-24 h-24 rounded-lg mr-4"
                height={100}
                src="https://storage.googleapis.com/a1aa/image/yMD5mr1Lcu4YIFC4gqPshFsAfuCa1wbuomN0Y30sFFkRtT5JA.jpg"
                width={100}
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-green-700">
                  Tumis Brokoli Ayam
                </h2>
                <p className="text-gray-700 mt-2">
                  250 gr daging ayam | 150 gr brokoli | 4 siung bawang merah |
                  3 siung bawang putih | 3 sdm saus tiram | ½ sdt lada | 1 sdt
                  kaldu ayam | Garam | Gula | Cuci bersih daging ayam dan potong
                  dadu. Cuci bersih brokoli dan potong sesuai selera. Haluskan bawang
                  putih dan bawang merah...
                </p>
                <button
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
                  onClick={handleClickTumisBrokoli}  // Menggunakan handleClickTumisBrokoli
                >
                  Klik Disini
                </button>
              </div>
              <div className="flex items-center">
                <i className="fas fa-plus-circle text-2xl text-gray-600" />
              </div>
            </div>
          </div>
          {/* Ayam Teriyaki */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex">
              <img
                alt="A dish of teriyaki chicken"
                className="w-24 h-24 rounded-lg mr-4"
                height={100}
                src="https://storage.googleapis.com/a1aa/image/8iI0Ar9OrRbmINWJlILz3GZVHx1QwVmhudgAza1uaK6p2p8E.jpg"
                width={100}
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-green-700">Ayam Teriyaki</h2>
                <p className="text-gray-700 mt-2">
                  200 gram dada ayam potong dadu | 100 gram jamur King Oyster |
                  100 gram Red Bell Pepper atau Paprika Merah (1 buah) | 1/2 bawang
                  bombay | 3 siung bawang putih | 2 siung bawang merah | 1 sdt kaldu
                  jamur | 1 sdt lada hitam bubuk | 1 sdt bubuk paprika | 1 sachet
                  dietabetasol | 25 gram Saori saus teriyaki | Secukupnya air putih
                  untuk menumis...
                </p>
                <button
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
                  onClick={handleClickAyamTeriyaki}  // Menggunakan handleClickAyamTeriyaki
                >
                  Klik Disini
                </button>
              </div>
              <div className="flex items-center">
                <i className="fas fa-plus-circle text-2xl text-gray-600" />
              </div>
            </div>
          </div>
          {/* Ayam Goreng Rempah */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex">
              <img
                alt="A dish of fried spiced chicken"
                className="w-24 h-24 rounded-lg mr-4"
                height={100}
                src="https://storage.googleapis.com/a1aa/image/KVcWZmiQLuooM1kklj7bIra28yRdghZpegL6IV35CGtQtT5JA.jpg"
                width={100}
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-green-700">
                  Ayam Goreng Rempah
                </h2>
                <p className="text-gray-700 mt-2">
                  160 gram paha ayam | 2 batang serai, potong potong | 1 sdt kunyit
                  bubuk | 2 sdt ketumbar | 2 siung bawang merah, 1,2 siung bawang
                  putih | Secukupnya Lada | 2 sdt bubuk go hiong. Potong ayam,
                  bumbui dengan bumbu diatas...
                </p>
                <button
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
                  onClick={handleClickAyamGoreng}  // Menggunakan handleClickAyamGoreng
                >
                  Klik Disini
                </button>
              </div>
              <div className="flex items-center">
                <i className="fas fa-plus-circle text-2xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Makansiang;
