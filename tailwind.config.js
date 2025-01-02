/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Mengaktifkan dark mode dengan kelas
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',  // Tambahkan path ke file MDX
      './components/**/*.{js,ts,jsx,tsx,mdx}',  // Jika ada komponen MDX di dalam folder komponen
      './app/**/*.{js,ts,jsx,tsx,mdx}',  // Jika Anda menggunakan folder app
    ],
    theme: {
      extend: {
        // Anda bisa menambahkan custom theme atau extend yang diinginkan di sini
      },
    },
    plugins: [
      require('@tailwindcss/typography'),  // Plugin untuk menangani styling teks otomatis
    ],
  }
  