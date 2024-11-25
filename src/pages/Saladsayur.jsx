import React from "react";
import { useNavigate } from "react-router-dom";

function Saladsayur() {
  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk kembali ke halaman Sarapan
  const goBack = () => {
    navigate("/sarapan"); // Mengarah ke halaman sarapan.jsx
  };

  // Fungsi untuk kembali ke halaman Home
  const goHome = () => {
    navigate("/home"); // Mengarah ke halaman home.jsx
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Resep Salad Sayur</title>
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
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-lg font-bold">Healthy Life</div>
        <nav className="flex space-x-4">
          <button onClick={goHome} className="text-green-600">
            Home
          </button>

          <div className="relative">
            {/* Tombol Fitur dengan dropdown */}
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
          <a href="#">Artikel</a>
          <a href="#">Pusat Bantuan</a>
        </nav>
        <div className="text-2xl">
          <i className="fas fa-bars" />
        </div>
      </header>
      <main className="p-8">
        <div className="flex items-center mb-4">
          {/* Tombol Back dengan ikon panah */}
          <button
            onClick={goBack}
            className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <i className="fas fa-arrow-left"></i> {/* Ikon Panah */}
          </button>
          <h1 className="text-2xl font-bold ml-4">Resep Salad Sayur</h1>
        </div>
        <div className="border-2 border-blue-400 p-4 flex">
          <img
            alt="Salad Sayur"
            className="w-1/2 h-auto"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/Kny0txkViQJmMdySZp5bZTzATkE7kV0K1aw5ddUxFecGfPyTA.jpg"
            width={300}
          />
          <div className="ml-4 w-1/2">
            <h2 className="text-xl font-bold text-green-700 mb-2">Resep Salad Sayur</h2>
            <ul className="list-decimal list-inside mb-4">
              <li>2 buah telur rebus, iris</li>
              <li>1 bonggol jagung manis, rebus</li>
              <li>50 gr selada keriting, iris</li>
              <li>1 buah wortel, iris korek api, rebus</li>
              <li>50 gr kol ungu, iris</li>
            </ul>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Siapkan bahan dressing, haluskan bawang putih atau parut juga bisa
              </li>
              <li>Campur semua bahan dressing, aduk-aduk lalu sisihkan</li>
              <li>
                Tata semua bahan salad di dalam wadah, kalau mau lebih ekonomis kamu
                bisa beli paket sayuran salad di aplikasi sayur fresh yang biasanya
                lebih murah. Jagung, disisir lalu rebus hingga matang, tiriskan
              </li>
              <li>
                Di tata secantik mungkin yah, disini aku gak pakai ayam, pakai telur
                lebih praktis dan enak dan sangat baik untuk program diet. Siram
                dressing yogurt di atasnya, hmmm salad versi murah meriah tapi enak
                dan sehat bisa langsung dinikmati
              </li>
            </ol>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Ringkasan kalori</h3>
              <p>Lemak: 9.00g</p>
              <p>Lemak Jenuh: 1.500g</p>
              <p>Lemak Tak Jenuh Ganda: 2.583g</p>
              <p>Lemak Tak Jenuh Tunggal: 8.267g</p>
              <p>Kolesterol: 291mg</p>
              <p>Protein: 1.00g</p>
              <p>Karbohidrat: 4.00g</p>
            </div>
          </div>
        </div>
        <div className="text-right text-green-700 text-xl font-bold mt-4">
          50 Kal
          <i className="fas fa-plus-circle" />
        </div>
      </main>
    </>
  );
}

export default Saladsayur;
