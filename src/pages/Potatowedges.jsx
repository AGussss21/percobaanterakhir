<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Resep Potato Wedges</title>
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
    <nav className="flex space-x-4 relative items-center">
      {/* Mengubah href Home agar menuju halaman1.html */}
      <a className="text-green-600" href="halaman1.html">
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
      <a href="#" className="text-gray-600">
        Artikel
      </a>
      <a href="#" className="text-gray-600">
        Pusat Bantuan
      </a>
    </nav>
    <div className="text-2xl">
      <i className="fas fa-bars" />
    </div>
  </header>
  <main className="p-8">
    <div className="flex items-center mb-4">
      {/* Tombol Back dengan JavaScript untuk kembali ke halaman2.html */}
      <button
        onclick="window.location.href='halaman2.html'"
        className="text-2xl text-green-600"
      >
        <i className="fas fa-arrow-left" />
      </button>
      <h1 className="text-2xl font-bold ml-4">Resep Potato Wedges</h1>
    </div>
    <div className="border-2 border-blue-400 p-4 flex">
      <img
        alt="A bowl of potato wedges garnished with herbs"
        className="w-1/2 h-auto"
        height={300}
        src="https://storage.googleapis.com/a1aa/image/akm8xVTforVyMaUcfZ5wcrFI6mbTqoF6aEewglsShZ0X8fIPB.jpg"
        width={300}
      />
      <div className="ml-4 w-1/2">
        <h2 className="text-xl font-bold text-green-700 mb-2">
          Resep Potato Wedges
        </h2>
        <ul className="list-decimal list-inside mb-4">
          <li>2 bh kentang</li>
          <li>2 bh wortel</li>
          <li>3 keping biskuit plain (khong guan salted)</li>
          <li>Garam, parsley, lada hitam, cabai kasar, olive oil</li>
        </ul>
        <ol className="list-decimal list-inside mb-4">
          <li>Cuci bersih kentang dan wortel.</li>
          <li>
            Rebus kentang hingga setengah matang lalu masukkan tomat. Sampai
            kulit tomat mengelupas masukkan apel, angkat dan tiriskan.
          </li>
          <li>
            Potong kentang sesuai selera, taburi bumbu lalu panggang di teflon
            hingga wangi. Angkat dan susun di piring.
          </li>
        </ol>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Ringkasan kalori</h3>
          <p>Lemak: 16.90g</p>
          <p>Lemak Jenuh: 1600g</p>
          <p>Lemak Tak Jenuh Ganda: 2.58g</p>
          <p>Lemak Tak Jenuh Tunggal: 8.72g</p>
          <p>Kolesterol: 210mg</p>
          <p>Protein: 4.70g</p>
          <p>Karbohidrat: 44.00g</p>
        </div>
      </div>
    </div>
    <div className="text-right text-green-700 text-xl font-bold mt-4">
      350 Kal
      <i className="fas fa-plus-circle" />
    </div>
  </main>
</>
