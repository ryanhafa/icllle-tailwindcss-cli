document.addEventListener('DOMContentLoaded', function () {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Ganti ikon burger menjadi X saat menu terbuka
        const icon = mobileMenuButton.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Tutup menu saat link di klik (untuk navigasi di halaman yang sama)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Scroll to Top Button ---
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    // Tampilkan tombol ketika scroll ke bawah
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollUpBtn.classList.remove('hidden');
        } else {
            scrollUpBtn.classList.add('hidden');
        }
    };

    // Scroll ke atas saat tombol diklik
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- PDF Iframe Reload on Page Show ---
    // Ini untuk memastikan PDF tampil dengan benar saat kembali ke halaman (misalnya, menggunakan tombol back browser)
    window.addEventListener('pageshow', function (event) {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            // Muat ulang sumber iframe untuk menghindari masalah cache
            iframe.src = iframe.src; 
        });
    });

});
