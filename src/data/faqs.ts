
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Berapa Minimum Order Quantity (MOQ)?",
    answer: "Minimum Order Quantity kami adalah 1x20' kontainer. Namun, kami juga dapat menerima pesanan lebih kecil untuk pembeli pertama yang ingin mencoba produk kami."
  },
  {
    id: 2,
    question: "Apakah Anda menawarkan layanan OEM?",
    answer: "Ya! Kami menawarkan layanan OEM lengkap termasuk kemasan khusus, label pribadi, dan bentuk serta ukuran briket khusus untuk memenuhi kebutuhan spesifik Anda."
  },
  {
    id: 3,
    question: "Apa ketentuan pengiriman Anda?",
    answer: "Kami menawarkan ketentuan pengiriman FOB, CIF, dan EXW. Pengiriman tersedia ke seluruh dunia dari fasilitas manufaktur kami di Indonesia."
  },
  {
    id: 4,
    question: "Metode pembayaran apa yang Anda terima?",
    answer: "Kami menerima T/T (Telegraphic Transfer), L/C (Letter of Credit), dan PayPal untuk pesanan kecil. Ketentuan pembayaran dapat dinegosiasikan untuk klien tetap."
  },
  {
    id: 5,
    question: "Berapa lama waktu produksi?",
    answer: "Waktu produksi biasanya berkisar antara 15-30 hari tergantung pada kuantitas dan spesifikasi pesanan. Kami selalu berusaha mengirimkan tepat waktu."
  },
  {
    id: 6,
    question: "Bisakah saya mendapatkan sampel sebelum memesan?",
    answer: "Tentu! Kami menyediakan sampel gratis (Anda hanya membayar biaya pengiriman). Hubungi kami untuk meminta sampel produk kami."
  }
];

