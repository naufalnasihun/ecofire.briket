
export interface ExportCountry {
  name: string;
  code: string;
}

export const exportCountries: ExportCountry[] = [
  { name: "Uni Emirat Arab", code: "AE" },
  { name: "Arab Saudi", code: "SA" },
  { name: "Jerman", code: "DE" },
  { name: "Amerika Serikat", code: "US" },
  { name: "Prancis", code: "FR" },
  { name: "Malaysia", code: "MY" },
  { name: "Jepang", code: "JP" },
  { name: "Korea Selatan", code: "KR" },
  { name: "Australia", code: "AU" }
];

export const productionProcess = [
  { step: 1, title: "Eceng gondok", description: "Menyediakan pilihan berkualitas tinggi dari perkebunan berkelanjutan" },
  { step: 2, title: "Karbonisasi", description: "Proses karbonisasi eceng gondok pada suhu tinggi" },
  { step: 3, title: "Penggilingan", description: "Menghaluskan cangkang yang sudah dikarbonisasi menjadi bubuk halus" },
  { step: 4, title: "Pencampuran", description: "Mencampur dengan pengikat alami untuk konsistensi" },
  { step: 5, title: "Pencetakan", description: "Mencetak menjadi berbagai bentuk menggunakan mesin hidrolik" },
  { step: 6, title: "Pengeringan", description: "Proses pengeringan alami dan terkontrol" },
  { step: 7, title: "Pengemasan", description: "Pengecekan kualitas dan pengemasan yang teliti" },
  { step: 8, title: "Ekspor", description: "Pengiriman ke seluruh dunia dengan hati-hati" }
];

export const stats = [
  { value: 500, label: "Pelanggan Tetap", suffix: "+" },
  { value: 20000, label: "Kapasitas Produksi (kg/bulan)", suffix: "+" },
  { value: 15, label: "Tahun Pengalaman", suffix: "+" },
  { value: 50, label: "Kota Layanan", suffix: "+" }
];

