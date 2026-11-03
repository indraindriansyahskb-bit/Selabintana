<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV. Selabintana</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            dark: '#1b4332',
                            primary: '#2d6a4f',
                            light: '#40916c',
                            accent: '#f4a261',
                            cream: '#fefae0',
                        }
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="font-sans text-gray-800 bg-slate-50 antialiased">

    <!-- Header / Navbar -->
    <header class="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="#" class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md">
                        <i class="fa-solid font-bold text-xl">🥚</i>
                    </div>
                    <div>
                        <span class="text-xl font-bold text-brand-dark tracking-tight block leading-none">CV. SELABINTANA</span>
                        <span class="text-xs text-brand-light font-medium tracking-wide">POULTRY FARM & PROCESSING</span>
                    </div>
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm">
                    <a href="#beranda" class="hover:text-brand-primary transition">Beranda</a>
                    <a href="#tentang" class="hover:text-brand-primary transition">Tentang Kami</a>
                    <a href="#teknologi" class="hover:text-brand-primary transition">Sistem Closed House</a>
                    <a href="#produk" class="hover:text-brand-primary transition">Produk</a>
                    <a href="#sertifikasi" class="hover:text-brand-primary transition">Kualitas & Mutu</a>
                    <a href="#kontak" class="hover:text-brand-primary transition">Kontak</a>
                </nav>

                <!-- CTA Button -->
                <div class="hidden md:flex items-center">
                    <a href="https://wa.me/6281385847898" target="_blank" class="bg-brand-primary hover:bg-brand-dark text-white px-5 py-2.5 rounded-full font-medium text-sm transition shadow-sm flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i> Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="beranda" class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-dark">
        <div class="absolute inset-0 z-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1920&q=80" alt="Peternakan Ayam Petelur Modern" class="w-full h-full object-cover">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/30 border border-brand-light/40 text-brand-cream text-xs font-medium mb-6">
                    <span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span> Modern Closed House System
                </div>
                <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                    Produsen Telur Segar Berkualitas & Higienis
                </h1>
                <p class="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
                    CV. Selabintana mengintegrasikan teknologi kandang *Closed House* modern, kontrol mikroklimat otomatis, serta biosekuriti ketat untuk menghasilkan telur bermutu tinggi bagi kebutuhan industri dan konsumen.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#produk" class="bg-brand-accent hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3.5 rounded-xl transition text-center shadow-lg">
                        Lihat Produk Kami
                    </a>
                    <a href="#teknologi" class="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3.5 rounded-xl backdrop-blur-md transition border border-white/20 text-center">
                        Pelajari Sistem Kandang
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Metric / Stats -->
    <section class="bg-white py-10 border-b border-gray-100 shadow-sm relative z-20 -mt-8 max-w-6xl mx-auto rounded-2xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-brand-primary mb-1">100.000+</div>
                <div class="text-xs md:text-sm text-gray-500 font-medium">Kapasitas Ayam Petelur</div>
            </div>
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-brand-primary mb-1">99,8%</div>
                <div class="text-xs md:text-sm text-gray-500 font-medium">Standar Kualitas Segar</div>
            </div>
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-brand-primary mb-1">100%</div>
                <div class="text-xs md:text-sm text-gray-500 font-medium">Biosekuriti Ketat</div>
            </div>
            <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-brand-primary mb-1">4+</div>
                <div class="text-xs md:text-sm text-gray-500 font-medium">Sertifikasi Resmi</div>
            </div>
        </div>
    </section>

    <!-- Tentang Kami -->
    <section id="tentang" class="py-20 md:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1000&q=80" alt="Peternakan Unggas Modern" class="rounded-3xl shadow-xl w-full object-cover h-[420px]">
                    <div class="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-2xl shadow-lg hidden sm:block max-w-xs">
                        <i class="fa-solid fa-award text-3xl mb-2 text-brand-accent"></i>
                        <p class="text-xs leading-relaxed font-light">Komitmen penuh pada keamanan pangan dan biosekuriti industri peternakan unggas.</p>
                    </div>
                </div>
                <div>
                    <span class="text-brand-primary font-semibold text-sm tracking-widest uppercase">Tentang CV. Selabintana</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">Pelopor Peternakan Unggas Berteknologi Modern</h2>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        CV. Selabintana adalah perusahaan peternakan ayam petelur terkemuka yang menerapkan teknologi kandang terisolasi (*Closed House System*) untuk menjamin kenyamanan ternak dan kualitas telur yang dihasilkan.
                    </p>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Dengan dukungan sanitasi biosekuriti bertingkat serta pengawasan mutu laboratorium berkesinambungan, kami menyediakan pasokan telur utuh dan telur cair (*liquid egg*) yang segar, aman, serta konsisten bagi pasar retail maupun skala industri.
                    </p>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3 text-gray-700 font-medium text-sm">
                            <i class="fa-solid fa-circle-check text-brand-primary"></i> Kontrol Suhu & Kelembaban Otomatis
                        </div>
                        <div class="flex items-center gap-3 text-gray-700 font-medium text-sm">
                            <i class="fa-solid fa-circle-check text-brand-primary"></i> Pakan Teruji Bebas Kimia Berbahaya
                        </div>
                        <div class="flex items-center gap-3 text-gray-700 font-medium text-sm">
                            <i class="fa-solid fa-circle-check text-brand-primary"></i> Fasilitas Pengolahan Higienis & Terstandarisasi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Teknologi Closed House -->
    <section id="teknologi" class="py-20 bg-brand-dark text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-accent font-semibold text-sm tracking-widest uppercase">Inovasi Peternakan</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4">Keunggulan Sistem Closed House</h2>
                <p class="text-gray-300 font-light">Kandang tertutup dengan ventilasi terkontrol memberikan lingkungan optimal bagi ayam petelur sehingga menghasilkan produksi bernutrisi tinggi dan bebas penyakit.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition">
                    <div class="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white text-xl mb-6">
                        <i class="fa-solid fa-wind"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Mikroklimat Otomatis</h3>
                    <p class="text-gray-300 text-sm leading-relaxed font-light">Suhu, kelembaban, dan pertukaran udara diatur presisi oleh sistem komputer untuk mencegah stres pada ternak.</p>
                </div>

                <div class="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition">
                    <div class="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white text-xl mb-6">
                        <i class="fa-solid fa-shield-virus"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Biosekuriti Bertingkat</h3>
                    <p class="text-gray-300 text-sm leading-relaxed font-light">Akses steril penuh bagi setiap personil dan armada angkut guna mencegah paparan patogen dari luar.</p>
                </div>

                <div class="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition">
                    <div class="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white text-xl mb-6">
                        <i class="fa-solid fa-glass-water-droplet"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Air & Pakan Otomatis</h3>
                    <p class="text-gray-300 text-sm leading-relaxed font-light">Distribusi pakan dan air minum via sistem nipple tertutup yang terjamin kesegaran dan kebersihannya.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Produk -->
    <section id="produk" class="py-20 md:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-primary font-semibold text-sm tracking-widest uppercase">Katalog Unggulan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Produk Berkualitas Kami</h2>
                <p class="text-gray-600">Menyediakan berbagai varian produk telur berkualitas tinggi sesuai kebutuhan usaha Anda.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Produk 1 -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80" alt="Telur Utuh Grade A" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <div class="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Konsumsi Harian</div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Telur Segar Grade A</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed">Telur cangkang bersih bermutu tinggi dengan cangkang tebal dan kuning telur utuh berkepadatan optimal.</p>
                        <a href="https://wa.me/6281385847898?text=Halo%20CV.%20Selabintana,%20saya%20ingin%20tanya%20produk%20Telur%20Segar%20Grade%20A" target="_blank" class="w-full inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-800 font-medium py-2.5 rounded-xl transition text-sm">
                            <i class="fa-brands fa-whatsapp"></i> Pesan Sekarang
                        </a>
                    </div>
                </div>

                <!-- Produk 2 -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80" alt="Telur Omega 3" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <div class="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Premio & Nutrisi</div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Telur Spesial Omega 3</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed">Dihasilkan dari pakan khusus bernutrisi kaya kandungan Omega-3 untuk kesehatan keluarga modern.</p>
                        <a href="https://wa.me/6281234567890?text=Halo%20CV.%20Selabintana,%20saya%20ingin%20tanya%20produk%20Telur%20Omega%203" target="_blank" class="w-full inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-800 font-medium py-2.5 rounded-xl transition text-sm">
                            <i class="fa-brands fa-whatsapp"></i> Pesan Sekarang
                        </a>
                    </div>
                </div>

                <!-- Produk 3 -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=800&q=80" alt="Liquid Egg Pasteurisasi" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <div class="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">Skala Industri</div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Liquid Egg (Telur Cair)</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed">Telur cair terpasturisasi higienis bagi industri *bakery*, HORECA, dan manufaktur olahan makanan.</p>
                        <a href="https://wa.me/6281234567890?text=Halo%20CV.%20Selabintana,%20saya%20ingin%20tanya%20produk%20Liquid%20Egg" target="_blank" class="w-full inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-brand-primary hover:text-white text-gray-800 font-medium py-2.5 rounded-xl transition text-sm">
                            <i class="fa-brands fa-whatsapp"></i> Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sertifikasi & Standar Mutu -->
    <section id="sertifikasi" class="py-20 bg-brand-cream/50 border-y border-amber-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-brand-primary font-semibold text-sm tracking-widest uppercase">Jaminan Kualitas</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Sertifikasi & Standar Mutu</h2>
                <p class="text-gray-600">Keamanan pangan konsumen adalah prioritas utama kami. Seluruh proses di peternakan Selabintana diawasi dan disertifikasi secara resmi.</p>
            </div>

            <!-- Grid 4 Sertifikat -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Sertifikat NKV -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-4">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Sertifikat NKV</h3>
                    <p class="text-gray-500 text-xs leading-relaxed">Nomor Kontrol Veteriner dari Kementerian Pertanian RI untuk kelayakan higiene-sanitasi.</p>
                </div>

                <!-- Sertifikat Halal -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-4">
                        <i class="fa-solid fa-stamp"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Sertifikat Halal</h3>
                    <p class="text-gray-500 text-xs leading-relaxed">Terregistrasi dan tersertifikasi resmi oleh BPJPH Kementerian Agama RI.</p>
                </div>

                <!-- Kompartemen Bebas AI -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-4">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Bebas Avian Influenza</h3>
                    <p class="text-gray-500 text-xs leading-relaxed">Sertifikasi Kompartemen Bebas AI resmi dari Direktorat Jenderal Peternakan & Keswan.</p>
                </div>

                <!-- Uji Bebas Residu -->
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl mb-4">
                        <i class="fa-solid fa-vial-circle-check"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Uji Bebas Residu</h3>
                    <p class="text-gray-500 text-xs leading-relaxed">Rutin lulus uji laboratorium terakreditasi (SIG/BPMSPH) bebas antibiotik & kimia.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Kontak & Form -->
    <section id="kontak" class="py-20 md:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <span class="text-brand-primary font-semibold text-sm tracking-widest uppercase">Hubungi Kami</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Siap Melayani Kebutuhan Usaha Anda</h2>
                    <p class="text-gray-600 mb-8 leading-relaxed">Diskusikan kebutuhan pasokan telur atau kemitraan bisnis peternakan bersama tim kami.</p>

                    <div class="space-y-6">
                        <div class="flex items
