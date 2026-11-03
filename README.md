<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV. Selabintana | Peternakan Ayam Petelur Modern Closed House</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            green: '#1b4332',
                            lightgreen: '#2d6a4f',
                            gold: '#f4a261',
                            amber: '#e76f51',
                            cream: '#fdfbf7',
                            dark: '#081c15'
                        }
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-overlay {
            background: linear-gradient(135deg, rgba(8, 28, 21, 0.90) 0%, rgba(27, 67, 50, 0.80) 100%);
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body class="font-sans bg-brand-cream text-gray-800 antialiased selection:bg-brand-gold selection:text-white">

    <!-- NAVIGATION BAR -->
    <header class="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="#" class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-brand-gold shadow-md">
                        <i class="fa-solid fa-egg text-xl"></i>
                    </div>
                    <div>
                        <span class="text-xl font-bold text-brand-green tracking-tight">CV. SELABINTANA</span>
                        <span class="block text-xs text-brand-gold font-semibold tracking-widest uppercase">Closed House Layer Farm</span>
                    </div>
                </a>

                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    <a href="#home" class="hover:text-brand-lightgreen transition-colors py-2">Beranda</a>
                    <a href="#about" class="hover:text-brand-lightgreen transition-colors py-2">Tentang Kami</a>
                    <a href="#technology" class="hover:text-brand-lightgreen transition-colors py-2">Teknologi</a>
                    <a href="#products" class="hover:text-brand-lightgreen transition-colors py-2">Produk</a>
                    <a href="#certifications" class="hover:text-brand-lightgreen transition-colors py-2">Sertifikasi</a>
                    <a href="#contact" class="hover:text-brand-lightgreen transition-colors py-2">Kontak</a>
                </nav>

                <!-- Action Button -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="https://wa.me/6281234567890?text=Halo%20CV.%20Selabintana,%20saya%20ingin%20mengajukan%20penawaran/pemesanan%20telur." target="_blank" class="bg-brand-green hover:bg-brand-lightgreen text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>Order Grosir</span>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-gray-700 hover:text-brand-green focus:outline-none p-2">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#home" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Beranda</a>
            <a href="#about" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Tentang Kami</a>
            <a href="#technology" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Teknologi Closed House</a>
            <a href="#products" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Produk Telur</a>
            <a href="#certifications" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Sertifikasi & Mutu</a>
            <a href="#contact" class="block py-2 text-gray-700 hover:text-brand-green font-medium">Kontak & Pemesanan</a>
            <a href="https://wa.me/6281234567890" target="_blank" class="inline-flex w-full justify-center items-center space-x-2 bg-brand-green text-white py-3 rounded-xl font-semibold shadow">
                <i class="fa-brands fa-whatsapp text-lg"></i>
                <span>Hubungi via WhatsApp</span>
            </a>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <!-- Background Image: Gambar Ayam Betina di Farm Unsplash -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80" 
                 alt="Peternakan Ayam Petelur CV Selabintana" 
                 class="w-full h-full object-cover object-center"
                 onerror="this.src='https://placehold.co/1920x1080/1b4332/ffffff?text=CV.+Selabintana+Modern+Poultry+Farm'">
            <div class="absolute inset-0 gradient-overlay"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <div class="max-w-3xl space-y-6">
                <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-brand-gold border border-white/20 text-xs sm:text-sm font-semibold">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span>Sistem Biosekuriti Ketat & Bebas Residu Kimia</span>
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Pasokan Telur Segar Berkualitas dengan <span class="text-brand-gold">Teknologi Closed House</span>
                </h1>
                
                <p class="text-lg sm:text-xl text-gray-200 leading-relaxed font-light">
                    CV. Selabintana menghadirkan telur konsumsi segar mutu premium langsung dari peternakan ayam petelur modern berstandar kesehatan hewani terpercaya di Sukabumi.
                </p>

                <div class="pt-4 flex flex-col sm:flex-row gap-4">
                    <a href="#contact" class="inline-flex justify-center items-center px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-0.5">
                        <i class="fa-solid fa-paper-plane mr-2"></i> Hubungi Kami
                    </a>
                    <a href="#products" class="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all">
                        <i class="fa-solid fa-layer-group mr-2"></i> Lihat Produk Kami
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- METRICS / STATS COUNTER -->
    <section class="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            <div class="text-center pt-4 lg:pt-0">
                <div class="text-brand-green text-3xl font-extrabold mb-1">100.000+</div>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Populasi Ayam Produktif</p>
            </div>
            <div class="text-center pt-4 lg:pt-0">
                <div class="text-brand-gold text-3xl font-extrabold mb-1">50.000+</div>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Butir Telur / Hari</p>
            </div>
            <div class="text-center pt-4 lg:pt-0">
                <div class="text-brand-green text-3xl font-extrabold mb-1">99.9%</div>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Biosekuriti Steril</p>
            </div>
            <div class="text-center pt-4 lg:pt-0">
                <div class="text-brand-gold text-3xl font-extrabold mb-1">NKV & Halal</div>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Sertifikasi Kementan</p>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <!-- Gambar Ayam di Peternakan Modern Unsplash -->
                        <img src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80" 
                             alt="Fasilitas Peternakan Unggas CV Selabintana" 
                             class="w-full h-auto object-cover"
                             onerror="this.src='https://placehold.co/800x600/2d6a4f/ffffff?text=Fasilitas+Kandang+Closed+House'">
                    </div>
                    <!-- Accent background box -->
                    <div class="absolute -bottom-6 -right-6 w-full h-full bg-brand-gold/20 rounded-3xl z-0 hidden sm:block"></div>
                    <div class="absolute -top-6 -left-6 bg-brand-green text-white p-6 rounded-2xl z-20 shadow-lg hidden sm:block max-w-xs">
                        <p class="text-2xl font-bold">10+ Tahun</p>
                        <p class="text-xs text-brand-gold">Pengalaman Manajemen Peternakan Modern</p>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="inline-block bg-brand-lightgreen/10 px-4 py-1.5 rounded-full text-brand-green font-semibold text-sm">
                        Profil Perusahaan
                    </div>
                    <h2 class="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                        Dedikasi Menghasilkan Telur Terbaik dari Kandang Terkontrol
                    </h2>
                    <p class="text-gray-600 leading-relaxed">
                        <strong>CV. Selabintana</strong> adalah perusahaan agribisnis berwawasan lingkungan yang berlokasi di Sukabumi, Jawa Barat. Kami mengoperasikan sistem peternakan ayam petelur <em>Closed House System</em> (kandang tertutup) untuk memastikan kenyamanan penuh hewan (*animal welfare*) dan produktivitas yang higienis.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        Dengan memadukan pakan bernutrisi terukur, sanitasi menyeluruh, serta pemantauan mikroklimat digital, produk telur kami terjamin kebersihan, ketebalan cangkang, dan kesegaran kuning telurnya hingga ke tangan konsumen.
                    </p>

                    <div class="grid grid-cols-2 gap-4 pt-2">
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-circle-check text-brand-lightgreen text-xl mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Nutrisi Seimbang</h4>
                                <p class="text-xs text-gray-500">Pakan alami kaya protein & asam amino.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-circle-check text-brand-lightgreen text-xl mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Bebas Antibiotik</h4>
                                <p class="text-xs text-gray-500">Pengawasan ketat dari dokter hewan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CLOSED HOUSE TECHNOLOGY SECTION -->
    <section id="technology" class="py-24 bg-brand-green text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-white/10 text-brand-gold px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-white/20">
                    Sistem Kandang Tertutup
                </span>
                <h2 class="text-3xl sm:text-4xl font-bold mt-4">Keunggulan Teknologi Closed House</h2>
                <p class="text-gray-300 mt-4">
                    Mengapa produk dari sistem Closed House CV. Selabintana lebih konsisten, sehat, dan higienis dibanding peternakan konvensional?
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Tech Card 1 -->
                <div class="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover backdrop-blur-sm">
                    <div class="w-14 h-14 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center text-2xl font-bold mb-6">
                        <i class="fa-solid fa-temperature-arrow-down"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Kontrol Iklim Otomatis</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Sistem kipas blower exhaust dan cooling pad menjaga suhu ideal 24-28°C dan kelembaban optimal tanpa terpengaruh cuaca eksternal.
                    </p>
                </div>

                <!-- Tech Card 2 -->
                <div class="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover backdrop-blur-sm">
                    <div class="w-14 h-14 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center text-2xl font-bold mb-6">
                        <i class="fa-solid fa-shield-virus"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Biosekuriti Ketat</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Akses steril dua arah, penyemprotan desinfektan otomatis, dan proteksi total dari burung luar atau vektor penyakit.
                    </p>
                </div>

                <!-- Tech Card 3 -->
                <div class="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover backdrop-blur-sm">
                    <div class="w-14 h-14 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center text-2xl font-bold mb-6">
                        <i class="fa-solid fa-faucet-drip"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Pakan & Minum Nipple</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Sistem penakaran auger dan nipple drinker tertutup menjamin ketersediaan air bersih dan pakan segar tanpa terkontaminasi.
                    </p>
                </div>

                <!-- Tech Card 4 -->
                <div class="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover backdrop-blur-sm">
                    <div class="w-14 h-14 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center text-2xl font-bold mb-6">
                        <i class="fa-solid fa-broom-ball"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Manajemen Sanitasi</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Pembersihan kotoran secara teratur menggunakan sabuk conveyer otomatis menjaga lingkungan kandang bebas gas amonia.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- PRODUCTS SECTION -->
    <section id="products" class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-brand-lightgreen/10 text-brand-green px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                    Katalog Produk
                </span>
                <h2 class="text-3xl sm:text-4xl font-bold text-brand-dark mt-4">Produk Telur Segar Berkualitas</h2>
                <p class="text-gray-600 mt-4">
                    Kami melayani kebutuhan grosir agen, supermarket, pabrik olahan makanan, hingga industri HORECA.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Product 1: Gambar Telur Segar di Tray Unsplash -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 card-hover flex flex-col">
                    <div class="h-56 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80" 
                             alt="Telur Fresh Curah & Tray" 
                             class="w-full h-full object-cover"
                             onerror="this.src='https://placehold.co/600x400/f4a261/ffffff?text=Telur+Fresh+Tray'">
                        <span class="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Best Seller
                        </span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Telur Utuh Segar (Grade A)</h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Telur cangkang cokelat tebal, ukuran seragam, bersih dari kotoran, dan kuning telur berwarna oranye pekat.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-6">
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Kemasan Tray Kertas (30 Butir)</li>
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Kemasan Karton Bulk (15 Kg)</li>
                            </ul>
                        </div>
                        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Telur%20Utuh%20Segar%20Grade%20A" target="_blank" class="w-full text-center py-3 bg-brand-lightgreen hover:bg-brand-green text-white font-semibold rounded-xl transition-all">
                            Tanyakan Harga Grosir
                        </a>
                    </div>
                </div>

                <!-- Product 2: Gambar Kuning Telur Omega 3 Unsplash -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 card-hover flex flex-col">
                    <div class="h-56 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80" 
                             alt="Telur Omega 3 Premium" 
                             class="w-full h-full object-cover"
                             onerror="this.src='https://placehold.co/600x400/e76f51/ffffff?text=Telur+Omega+3'">
                        <span class="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow">
                            Premium Nutrisi
                        </span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Telur Special Omega 3</h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Dihasilkan dari ayam yang diberi pakan khusus kaya minyak ikan alami & vitamin E tinggi untuk kesehatan keluarga.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-6">
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Kemasan Retail Pack (10 Butir)</li>
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Bebas Bau Amis Berlebih</li>
                            </ul>
                        </div>
                        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Telur%20Omega%203%20Premium" target="_blank" class="w-full text-center py-3 bg-brand-lightgreen hover:bg-brand-green text-white font-semibold rounded-xl transition-all">
                            Tanyakan Harga Grosir
                        </a>
                    </div>
                </div>

                <!-- Product 3: Gambar Olahan Telur Steril / Mangkuk Telur Unsplash -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 card-hover flex flex-col">
                    <div class="h-56 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=600&q=80" 
                             alt="Pasteurized Liquid Egg" 
                             class="w-full h-full object-cover"
                             onerror="this.src='https://placehold.co/600x400/2d6a4f/ffffff?text=Liquid+Egg+Industri'">
                        <span class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Industri HORECA
                        </span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Liquid Egg (Telur Cair)</h3>
                            <p class="text-gray-600 text-sm mb-4">
                                Telur cair pasturisasi steril siap pakai untuk bakery, hotel, dan pabrik roti tanpa repot memecahkan cangkang.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-6">
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Opsi Whole / Whites / Yolks</li>
                                <li><i class="fa-solid fa-check text-brand-lightgreen mr-1"></i> Kemasan Galon / Bag-in-Box</li>
                            </ul>
                        </div>
                        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Telur%20Cair%20Pasturisasi" target="_blank" class="w-full text-center py-3 bg-brand-lightgreen hover:bg-brand-green text-white font-semibold rounded-xl transition-all">
                            Tanyakan Penawaran Industri
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CERTIFICATIONS SECTION -->
    <section id="certifications" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-brand-cream border border-gray-200 rounded-3xl p-8 sm:p-12">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div class="lg:col-span-1 space-y-4">
                        <span class="text-brand-gold font-bold text-sm tracking-wider uppercase">Jaminan Kualitas</span>
                        <h2 class="text-3xl font-bold text-brand-dark">Sertifikasi & Standar Mutu</h2>
                        <p class="text-gray-600 text-sm">
                            Keamanan pangan konsumen adalah prioritas utama kami. Seluruh proses di peternakan Selabintana diawasi secara resmi oleh dinas terkait.
                        </p>
                    </div>

                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <!-- Cert Item 1 -->
                        <div class="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
                            <div class="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <h4 class="font-bold text-gray-800 text-sm">Sertifikat NKV</h4>
                            <p class="text-xs text-gray-500 mt-1">Nomor Kontrol Veteriner Kementan</p>
                        </div>

                        <!-- Cert Item 2 -->
                        <div class="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
                            <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                <i class="fa-solid fa-stamp"></i>
                            </div>
                            <h4 class="font-bold text-gray-800 text-sm">Sertifikat Halal</h4>
                            <p class="text-xs text-gray-500 mt-1">BPJPH Kementerian Agama RI</p>
                        </div>

                        <!-- Cert Item 3 -->
                        <div class="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
                            <div class="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                <i class="fa-solid fa-flask"></i>
                            </div>
                            <h4 class="font-bold text-gray-800 text-sm">Uji Bebas Residu</h4>
                            <p class="text-xs text-gray-500 mt-1">Lulus Uji Laboratorium Terkreditasi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT & FORM SECTION -->
    <section id="contact" class="py-24 bg-brand-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Info Left -->
                <div class="space-y-8">
                    <div>
                        <span class="bg-brand-lightgreen/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-semibold">
                            Hubungi Kami
                        </span>
                        <h2 class="text-3xl sm:text-4xl font-bold text-brand-dark mt-4">Kemitraan & Layanan Pelanggan</h2>
                        <p class="text-gray-600 mt-4">
                            Siap bekerja sama untuk kebutuhan rantai pasok telur Anda? Tim sales dan customer service kami siap melayani Anda.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 rounded-2xl bg-brand-green text-brand-gold flex items-center justify-center text-xl flex-shrink-0">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-800">Alamat Peternakan</h4>
                                <p class="text-gray-600 text-sm mt-1">
                                    Jl. Selabintana Km. 6, Kawasan Agrowisata, Kab. Sukabumi, Jawa Barat 43151
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 rounded-2xl bg-brand-green text-brand-gold flex items-center justify-center text-xl flex-shrink-0">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-800">Telepon / WhatsApp</h4>
                                <p class="text-gray-600 text-sm mt-1">+62 812-3456-7890 / (0266) 123456</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 rounded-2xl bg-brand-green text-brand-gold flex items-center justify-center text-xl flex-shrink-0">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-800">Email</h4>
                                <p class="text-gray-600 text-sm mt-1">info@selabintana.web.id / sales@selabintana.web.id</p>
                            </div>
                        </div>
                    </div>

                    <!-- Map Placeholder -->
                    <div class="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-48 bg-gray-200 relative">
                        <iframe 
                            class="w-full h-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.985651239121!2d106.9451!3d-6.8923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sSelabintana%2C%20Sukabumi!5e0!3m2!1sid!2sid!4v1600000000000" 
                            allowfullscreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>

                <!-- Form Right -->
                <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 class="text-2xl font-bold text-brand-dark mb-6">Formulir Kirim Pesan / Penawaran</h3>
                    
                    <form id="contactForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap / Perusahaan</label>
                            <input type="text" required placeholder="Contoh: PT. Kuliner Sejahtera" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightgreen transition">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                                <input type="tel" required placeholder="0812xxxxxxx" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightgreen transition">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Kategori Pesan</label>
                                <select class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightgreen transition">
                                    <option>Pemesanan Grosir</option>
                                    <option>Kemitraan Agen</option>
                                    <option>Penawaran Kerja Sama</option>
                                    <option>Saran & Keluhan</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Pesan / Detail Kebutuhan</label>
                            <textarea rows="4" required placeholder="Tuliskan detail kebutuhan jumlah tray/tonase atau pertanyaan Anda..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightgreen transition"></textarea>
                        </div>

                        <button type="submit" class="w-full py-4 bg-brand-green hover:bg-brand-lightgreen text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                            <i class="fa-solid fa-paper-plane"></i>
                            <span>Kirim Pesan Sekarang</span>
                        </button>
                    </form>

                    <!-- Feedback Alert Message -->
                    <div id="formAlert" class="hidden mt-4 p-4 rounded-xl bg-green-100 text-green-800 text-sm font-medium">
                        Terima kasih! Pesan Anda telah terkirim. Tim CV. Selabintana akan segera menghubungi Anda.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div class="space-y-4 md:col-span-2">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold">
                            <i class="fa-solid fa-egg"></i>
                        </div>
                        <span class="text-xl font-bold tracking-tight">CV. SELABINTANA</span>
                    </div>
                    <p class="text-gray-400 text-sm max-w-md">
                        Produsen dan pemasok telur ayam konsumsi berkualitas tinggi di Sukabumi. Berkomitmen pada keamanan pangan, biosekuriti modern, dan keberlanjutan lingkungan.
                    </p>
                </div>

                <div>
                    <h4 class="text-brand-gold font-semibold mb-4">Navigasi Cepat</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="#home" class="hover:text-white transition">Beranda</a></li>
                        <li><a href="#about" class="hover:text-white transition">Tentang Perusahaan</a></li>
                        <li><a href="#technology" class="hover:text-white transition">Teknologi Closed House</a></li>
                        <li><a href="#products" class="hover:text-white transition">Produk Telur</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-brand-gold font-semibold mb-4">Jam Operasional</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>Senin - Sabtu: 07.00 - 16.00 WIB</li>
                        <li>Pengiriman: Setiap Hari</li>
                        <li class="pt-2 text-white font-semibold">Layanan Darurat 24/7</li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; 2026 CV. Selabintana. All Rights Reserved.</p>
                <p class="mt-2 sm:mt-0">Hosted on GitHub Pages & Powered by Cloudflare</p>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE JAVASCRIPT -->
    <script>
        // Mobile Navigation Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Contact Form Submission Handler
        const contactForm = document.getElementById('contactForm');
        const formAlert = document.getElementById('formAlert');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formAlert.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => {
                formAlert.classList.add('hidden');
            }, 5000);
        });
    </script>
</body>
</html>
